import { combineReducers } from 'redux';

import {
  key as employeesKey,
  reducer as employeeReducer
} from './employees/index';

export default combineReducers({
  [employeesKey]: employeeReducer
});
