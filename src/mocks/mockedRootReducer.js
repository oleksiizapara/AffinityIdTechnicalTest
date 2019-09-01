import { combineReducers } from 'redux';

import { key as employeesKey } from 'employees';

import * as employeesMocks from 'mocks/employeesMocks';

const initialEmployeesState = employeesMocks.defaultMock;

const mockedReducer = initialState => (state = initialState) => {
  return state;
};

export default combineReducers({
  [employeesKey]: mockedReducer(initialEmployeesState)
});
