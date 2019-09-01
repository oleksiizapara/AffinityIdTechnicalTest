export const key = 'employees';

const LOAD = `[${key}] LOAD`;
const LOADED = `[${key}] LOADED`;
const SEARCH = `[${key}] SEARCH`;
const ERROR = `[${key}] ERROR`;
const SORT = `[${key}] SORT`;
const SELECT_EMPLOYEE = `[${key}] SELECT_EMPLOYEE`;
const UPDATE = `[${key}] UPDATE`;
const UPDATED = `[${key}] UPDATED`;
const UPDATE_EMPLOYEES = `[${key}] UPDATE_EMPLOYEES`;
const DELETE = `[${key}] DELETE`;
const DELETE_CONFIRM = `[${key}] DELETE_CONFIRM`;
const DELETED = `[${key}] DELETED`;
const TO_DEFAULT = `[${key}] TO_DEFAULT`;

export const actionTypes = {
  LOAD,
  LOADED,
  SEARCH,
  SORT,
  SELECT_EMPLOYEE,
  ERROR,
  UPDATE,
  UPDATED,
  UPDATE_EMPLOYEES,
  DELETE,
  DELETE_CONFIRM,
  DELETED,
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

const EDIT_STATE = 'EDIT_STATE';
const DELETE_CONFIRM_STATE = 'EDIT_STATE';

export const selectedEmployeeStates = {
  DEFAULT_STATE,
  EDIT_STATE,
  DELETE_CONFIRM_STATE
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

const search = text => ({
  type: actionTypes.SEARCH,
  payload: {
    text
  }
});

const sort = direction => ({
  type: actionTypes.SORT,
  payload: {
    direction
  }
});

const selectEmployee = employee => ({
  type: actionTypes.SELECT_EMPLOYEE,
  payload: {
    employee
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

const updated = employee => ({
  type: actionTypes.UPDATED,
  payload: {
    employee
  }
});

const updateEmployees = employees => ({
  type: actionTypes.UPDATE_EMPLOYEES,
  payload: {
    employees
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
  error,
  update,
  updated,
  updateEmployees,
  deleteEmployee,
  deleteEmployeeConfirm,
  deletedEmployee,
  toDefault
};
