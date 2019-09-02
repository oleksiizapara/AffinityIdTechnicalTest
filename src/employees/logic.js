import { createLogic } from 'redux-logic';
import produce from 'immer';
import Enumerable from 'linq';

import { actionTypes, actions, sortDirections } from './actions';

import { selectors } from './reducer';
import { errorMessages } from './errorMessages';
import { async } from 'q';

const request = async (httpClient, baseApiAddress, url) => {
  return await httpClient.get(baseApiAddress + url).then(resp => {
    return resp.data;
  });
};

const sortEmployees = (employees, sortDirection) => {
  switch (sortDirection) {
    case sortDirections.NEWEST:
      return employees.orderByDescending('$.updatedAt');
    case sortDirections.AlPHABETICALLY:
      return employees.orderBy('$.firstName').thenBy('$.familyName');
  }
};

const updateEmployeeProperties = (employee, teams, roles, images) => {
  employee.iconSrc = images.find(y => employee.imageId === y.id).url;
  employee.role = roles.find(y => employee.roleId === y.id).name;
  employee.team = teams.find(y => employee.teamId === y.id).name;
};

const load = createLogic({
  type: actionTypes.LOAD,

  processOptions: {
    dispatchReturn: true
  },

  latest: true,

  async process(
    { getState, action, httpClient, baseApiAddress },
    dispatch,
    done
  ) {
    const { employeeId } = action.payload;

    try {
      const data = await Promise.all([
        request(httpClient, baseApiAddress, '/employees'),
        request(httpClient, baseApiAddress, '/teams'),
        request(httpClient, baseApiAddress, '/roles'),
        request(httpClient, baseApiAddress, '/images')
      ]);

      const [employees, teams, roles, images] = data;

      employees.forEach(x => updateEmployeeProperties(x, teams, roles, images));

      dispatch(actions.loaded(employees, teams, images, roles));

      dispatch(actions.updateEmployees(employees));

      dispatch(actions.selectEmployee(employeeId));
    } catch (err) {
      console.error(err);
      dispatch(actions.error(errorMessages.cannotLoadData));
    }

    done();
  }
});

const selectEmployee = createLogic({
  type: actionTypes.SELECT_EMPLOYEE,

  processOptions: {
    dispatchReturn: true
  },

  latest: true,

  async process({ getState, action }, dispatch, done) {
    const employeeId = parseInt(action.payload.employeeId);

    const employees = selectors.employees(getState());

    const employee = employees.find(x => x.id === employeeId);
    const firstEmployee = employees[0];

    if (employee) {
      console.debug({ employee });
      dispatch(actions.selectedEmployee(employee));
    } else if (firstEmployee) {
      console.debug({ firstEmployee });
      dispatch(actions.selectedEmployee(firstEmployee));
    }

    done();
  }
});

const updateEmployee = createLogic({
  type: actionTypes.UPDATE,

  processOptions: {
    dispatchReturn: true
  },

  latest: true,

  async process({ getState, action }, dispatch, done) {
    const { employeeId } = action.payload;

    const employees = selectors.employees(getState());
    const employee = employees.find(x => x.id === employeeId);

    if (employee) {
      dispatch(actions.updated(employee));
    }

    done();
  }
});

const shareEmployee = createLogic({
  type: actionTypes.SHARE,

  processOptions: {
    dispatchReturn: true
  },

  latest: true,

  async process({ getState, action }, dispatch, done) {
    const { employeeId } = action.payload;

    var text = `${window.location.protocol}//${window.location.host}/${employeeId}`;
    navigator.clipboard.writeText(text).then(
      function() {
        console.log('Async: Copying to clipboard was successful!');
      },
      function(err) {
        console.error('Async: Could not copy text: ', err);
      }
    );

    done();
  }
});

const searchAndSort = createLogic({
  type: [actionTypes.SEARCH, actionTypes.SORT],

  processOptions: {
    dispatchReturn: true
  },

  latest: true,

  async process({ getState, action }, dispatch, done) {
    const employees = selectors.employees(getState());

    dispatch(actions.updateEmployees(employees));

    done();
  }
});

const updateEmployees = createLogic({
  type: actionTypes.UPDATE_EMPLOYEES,

  processOptions: {
    dispatchReturn: true
  },

  latest: true,

  async process({ getState, action }, dispatch, done) {
    const employees = selectors.employees(getState());
    const sortDirection = selectors.sortDirection(getState());
    const searchText = selectors.searchText(getState());

    const employeesGroups = Enumerable.from(employees)
      .where(
        x =>
          x.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
          x.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
          `${x.firstName} ${x.familyName}`
            .toLowerCase()
            .includes(searchText.toLowerCase())
      )
      .groupBy('$.role', '$', (name, employees) => ({
        name,
        employees: sortEmployees(employees, sortDirection).toArray()
      }))
      .toArray();

    dispatch(actions.updatedEmployees(employeesGroups));

    done();
  }
});

const createdEmployee = createLogic({
  type: actionTypes.CREATED_EMPLOYEE,

  processOptions: {
    dispatchReturn: true
  },

  latest: true,

  async process(
    { getState, action, httpClient, baseApiAddress },
    dispatch,
    done
  ) {
    var { selectedEmployee, onSubmitActions } = action.payload;

    selectedEmployee.teamId = parseInt(selectedEmployee.teamId);
    selectedEmployee.imageId = parseInt(selectedEmployee.imageId);
    selectedEmployee.roleId = parseInt(selectedEmployee.roleId);

    var nameMatch = /^(\w+)[^\w]+([\w ]+)$/.exec(selectedEmployee.name);

    selectedEmployee.firstName = nameMatch[1];
    selectedEmployee.familyName = nameMatch[2];
    delete selectedEmployee.name;

    var addressMatch = /^([^,]+), ([\w ]+)$/.exec(selectedEmployee.address);

    selectedEmployee.address = addressMatch[1];
    selectedEmployee.city = addressMatch[2];

    selectedEmployee.createdAt = new Date().getTime();
    selectedEmployee.updatedAt = new Date().getTime();

    console.log({ selectedEmployee });

    try {
      var responseEmployee = await httpClient
        .post(baseApiAddress + '/employees', selectedEmployee)
        .then(resp => {
          return resp.data;
        });

      var roles = selectors.roles(getState());
      var teams = selectors.teams(getState());
      var images = selectors.images(getState());

      console.log({ responseEmployee });

      updateEmployeeProperties(responseEmployee, teams, roles, images);

      console.log({ responseEmployee });

      var employees = selectors.employees(getState());
      employees = [...employees, responseEmployee];

      dispatch(actions.refreshEmployees(employees));
      dispatch(actions.updateEmployees(employees));
      dispatch(actions.selectEmployee(responseEmployee.id));
    } catch (error) {
      onSubmitActions.setFieldError('general', error.message);
    } finally {
      onSubmitActions.setSubmitting(false);
    }

    done();
  }
});

export default [
  load,
  selectEmployee,
  updateEmployee,
  shareEmployee,
  searchAndSort,
  updateEmployees,
  createdEmployee
];
