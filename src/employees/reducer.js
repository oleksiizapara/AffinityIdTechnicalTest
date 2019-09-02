import {
  key,
  actionTypes,
  formStates,
  selectedEmployeeStates,
  sortDirections
} from './actions';

import produce from 'immer';

export const selectors = {
  formState: state => state[key].formState,
  employees: state => state[key].employees,
  employeesGroups: state => state[key].employeesGroups,
  selectedEmployee: state => state[key].selectedEmployee,
  selectedEmployeeState: state => state[key].selectedEmployeeState,
  teams: state => state[key].teams,
  images: state => state[key].images,
  roles: state => state[key].roles,
  sortDirection: state => state[key].sortDirection,
  searchText: state => state[key].searchText
};

const initialState = {
  formState: formStates.DEFAULT_STATE,
  employeesGroups: [],
  employees: [],
  selectedEmployee: null,
  selectedEmployeeState: selectedEmployeeStates.DEFAULT_STATE,
  teams: [],
  images: [],
  roles: [],
  sortDirection: sortDirections.NEWEST,
  searchText: ''
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
        break;
      case actionTypes.ERROR:
        draft.error = action.payload.error;
        draft.formState = formStates.ERROR_STATE;
        break;
      case actionTypes.SELECTED_EMPLOYEE:
        draft.selectedEmployeeState = selectedEmployeeStates.SELECTED_STATE;
        draft.selectedEmployee = action.payload.selectedEmployee;
        break;
      case actionTypes.CREATE_EMPLOYEE:
        draft.selectedEmployeeState = selectedEmployeeStates.CREATE_STATE;
        draft.selectedEmployee = null;
        break;
      case actionTypes.UPDATED:
        draft.selectedEmployeeState = selectedEmployeeStates.UPDATE_STATE;
        draft.selectedEmployee = action.payload.selectedEmployee;
        break;
      case actionTypes.UPDATED_EMPLOYEES:
        draft.employeesGroups = action.payload.employeesGroups;
        break;
      case actionTypes.REFRESH_EMPLOYEES:
        draft.employees = action.payload.employees;
        break;
      case actionTypes.SORT:
        draft.sortDirection = action.payload.sortDirection;
        break;
      case actionTypes.SEARCH:
        draft.searchText = action.payload.searchText;
        break;
      case actionTypes.DELETE:
        draft.selectedEmployeeState =
          selectedEmployeeStates.DELETE_CONFIRM_STATE;
        break;
      default:
        break;
    }
  });
}
