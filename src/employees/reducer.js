import {
  key,
  actionTypes,
  formStates,
  selectedEmployeeStates
} from './actions';

import produce from 'immer';
import { sortDirections } from './constants';

export const selectors = {
  employees: state => state[key].employees,
  employeesGroups: state => state[key].employeesGroups,
  selectedEmployee: state => state[key].selectedEmployee,
  selectedEmployeeStatus: state => state[key].selectedEmployeeStatus,
  teams: state => state[key].teams,
  images: state => state[key].images,
  roles: state => state[key].roles,
  sortDirection: state => state[key].sortDirection
};

const initialState = {
  employees: [],
  selectedEmployee: null,
  selectedEmployeeStatus: selectedEmployeeStates.DEFAULT_STATE,
  teams: [],
  images: [],
  roles: [],
  sortDirection: sortDirections.NEWEST
};

export default function(state = initialState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case actionTypes.LOAD:
        draft.formState = formStates.LOADING_STATE;
        break;
      case actionTypes.LOADED:
        draft.formState = formStates.LOADED_STATE;
        draft.employees = action.payload.employees;
        draft.teams = action.payload.teams;
        draft.images = action.payload.images;
        draft.roles = action.payload.roles;
      case actionTypes.ERROR:
        draft.error = action.payload.error;
        draft.formState = formStates.ERROR_STATE;
        break;
      case actionTypes.SELECT_EMPLOYEE:
        draft.selectedEmployeeStatus = selectedEmployeeStates.DEFAULT_STATE;
        draft.selectedEmployee = formStates.selectedEmployee;
        break;
      case actionTypes.UPDATE_EMPLOYEES:
        draft.formState = formStates.LOADED_STATE;
        draft.employees = action.payload.employees;
        break;
      case actionTypes.SORT:
        draft.sortDirection = formStates.sortDirection;
        break;
      case actionTypes.DELETE:
        draft.selectedEmployeeStatus =
          selectedEmployeeStates.DELETE_CONFIRM_STATE;
        break;
      default:
        break;
    }
  });
}
