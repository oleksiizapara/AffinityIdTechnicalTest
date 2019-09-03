export const key = 'employees';

const LOAD = `[${key}] LOAD`;
const LOADED = `[${key}] LOADED`;
const SEARCH = `[${key}] SEARCH`;
const ERROR = `[${key}] ERROR`;
const SORT = `[${key}] SORT`;
const SELECT_EMPLOYEE = `[${key}] SELECT_EMPLOYEE`;
const SELECTED_EMPLOYEE = `[${key}] SELECTED_EMPLOYEE`;
const CREATE_EMPLOYEE = `[${key}] CREATE_EMPLOYEE`;
const SUBMIT_EMPLOYEE = `[${key}] SUBMIT_EMPLOYEE`;
const UPDATE = `[${key}] UPDATE`;
const UPDATE_EMPLOYEES = `[${key}] UPDATE_EMPLOYEES`;
const UPDATED_EMPLOYEES = `[${key}] UPDATED_EMPLOYEES`;
const REFRESH_EMPLOYEES = `[${key}] REFRESH_EMPLOYEES`;
const DELETE = `[${key}] DELETE`;
const DELETE_CONFIRM = `[${key}] DELETE_CONFIRM`;
const DELETED = `[${key}] DELETED`;
const SHARE = `[${key}] SHARE`;
const TO_DEFAULT = `[${key}] TO_DEFAULT`;

export const actionTypes = {
  LOAD,
  LOADED,
  SEARCH,
  SORT,
  SELECT_EMPLOYEE,
  SELECTED_EMPLOYEE,
  CREATE_EMPLOYEE,
  SUBMIT_EMPLOYEE,
  ERROR,
  UPDATE,
  UPDATE_EMPLOYEES,
  UPDATED_EMPLOYEES,
  REFRESH_EMPLOYEES,
  DELETE,
  DELETE_CONFIRM,
  DELETED,
  SHARE,
  TO_DEFAULT
};

const DEFAULT_STATE = 'DEFAULT_STATE';
const LOADED_STATE = 'LOADED_STATE';
const LOADING_STATE = 'LOADING_STATE';
const ERROR_STATE = 'ERROR_STATE';

export const formStates = {
  DEFAULT_STATE,
  LOADING_STATE,
  LOADED_STATE,
  ERROR_STATE
};

const SELECTED_STATE = 'SELECTED_STATE';
const CREATE_STATE = 'CREATE_STATE';
const UPDATE_STATE = 'UPDATE_STATE';
const DELETE_CONFIRM_STATE = 'EDIT_STATE';

export const selectedEmployeeStates = {
  DEFAULT_STATE,
  SELECTED_STATE,
  CREATE_STATE,
  UPDATE_STATE,
  DELETE_CONFIRM_STATE
};

const NEWEST = 'NEWEST';
const AlPHABETICALLY = 'AlPHABETICALLY';

export const sortDirections = {
  NEWEST,
  AlPHABETICALLY
};

const load = employeeId => ({
  type: actionTypes.LOAD,
  payload: {
    employeeId
  }
});

const loaded = (employees, teams, images, roles) => ({
  type: actionTypes.LOADED,
  payload: {
    employees,
    teams,
    images,
    roles
  }
});

const refreshEmployees = employees => ({
  type: actionTypes.REFRESH_EMPLOYEES,
  payload: {
    employees
  }
});

const search = searchText => ({
  type: actionTypes.SEARCH,
  payload: {
    searchText
  }
});

const sort = sortDirection => ({
  type: actionTypes.SORT,
  payload: {
    sortDirection
  }
});

const selectEmployee = employeeId => ({
  type: actionTypes.SELECT_EMPLOYEE,
  payload: {
    employeeId
  }
});

const selectedEmployee = (
  selectedEmployee,
  selectedEmployeeState = selectedEmployeeStates.SELECTED_STATE
) => ({
  type: actionTypes.SELECTED_EMPLOYEE,
  payload: {
    selectedEmployee,
    selectedEmployeeState
  }
});

const create = () => ({
  type: actionTypes.CREATE_EMPLOYEE,
  payload: {}
});

const submitEmployee = (selectedEmployee, onSubmitActions) => ({
  type: actionTypes.SUBMIT_EMPLOYEE,
  payload: {
    selectedEmployee,
    onSubmitActions
  }
});

const error = error => ({
  type: actionTypes.ERROR,
  payload: {
    error
  }
});

const update = employeeId => ({
  type: actionTypes.UPDATE,
  payload: {
    employeeId
  }
});

const updateEmployees = employees => ({
  type: actionTypes.UPDATE_EMPLOYEES,
  payload: {
    employees
  }
});

const updatedEmployees = employeesGroups => ({
  type: actionTypes.UPDATED_EMPLOYEES,
  payload: {
    employeesGroups
  }
});

const deleteEmployee = employeeId => ({
  type: actionTypes.DELETE,
  payload: {
    employeeId
  }
});

const deleteEmployeeConfirm = employeeId => ({
  type: actionTypes.DELETE_CONFIRM,
  payload: {
    employeeId
  }
});

const deletedEmployee = employeeId => ({
  type: actionTypes.DELETED,
  payload: {
    employeeId
  }
});

const share = employeeId => ({
  type: actionTypes.SHARE,
  payload: {
    employeeId
  }
});

const toDefault = () => ({
  type: actionTypes.TO_DEFAULT,
  payload: {}
});

export const actions = {
  load,
  loaded,
  search,
  sort,
  selectEmployee,
  selectedEmployee,
  refreshEmployees,
  create,
  submitEmployee,
  error,
  update,
  updateEmployees,
  updatedEmployees,
  deleteEmployee,
  deleteEmployeeConfirm,
  deletedEmployee,
  share,
  toDefault
};
