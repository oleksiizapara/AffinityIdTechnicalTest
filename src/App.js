import React from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
          <Switch>
            <Route path='/:id' component={EmployeePage} />
            <Route path='/' component={EmployeePage} />
          </Switch>
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
