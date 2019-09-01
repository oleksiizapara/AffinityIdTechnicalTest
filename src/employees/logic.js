import { createLogic } from 'redux-logic';
import produce from 'immer';
import Enumerable from 'linq';

import { actionTypes, actions } from './actions';

import { selectors } from './reducer';
import { errorMessages } from './errorMessages';
import { async } from 'q';

const request = async (httpClient, url) => {
  return await httpClient
    .get(
      'https://my-json-server.typicode.com/oleksiizapara/AffinityIdTechnicalTestApi' +
        url
    )
    .then(resp => {
      return resp.data;
    });
};

const load = createLogic({
  type: actionTypes.LOAD,

  processOptions: {
    dispatchReturn: true
  },

  latest: true,

  async process({ getState, action, httpClient }, dispatch, done) {
    const { employeeId } = action.payload;

    try {
      const employees = await request(httpClient, '/employees');

      const teams = await request(httpClient, '/teams');

      const roles = await request(httpClient, '/roles');

      const images = await request(httpClient, '/images');

      employees.forEach(employee => {
        employee.iconSrc = images.find(x => employee.imageId === x.id).url;
        employee.role = roles.find(x => employee.roleId === x.id).name;
        employee.team = teams.find(x => employee.teamId === x.id).name;
      });

      dispatch(actions.loaded(employees, teams, images, roles));

      // if (employeeId !== undefined && ) {
      //   dispatch(actions.selectEmployee());
      // }
    } catch (err) {
      console.error(err);
      dispatch(actions.error(errorMessages.cannotLoadData));
    }

    done();
  }
});

export default [load];
