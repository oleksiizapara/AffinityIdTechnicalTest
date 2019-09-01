import React from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import configureStore from './configureStore';
import mockedConfigureStore from 'mocks/mockedConfigureStore';

import EmployeePage from 'employees/components/EmployeesPage';

const store = configureStore();
const mockedStore = mockedConfigureStore();

export default function App() {
  console.debug('App started');
  return (
    <>
      <Router>
        <Provider store={store}>
          <EmployeePage />
        </Provider>
      </Router>
    </>
  );
}

export function MockedApp() {
  console.debug('MockedApp started');
  return (
    <Router>
      <Provider store={mockedStore}>
        <EmployeePage />
      </Provider>
    </Router>
  );
}
