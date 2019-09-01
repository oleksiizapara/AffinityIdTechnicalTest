import React from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import configureStore from './configureStore';
import EmployeePage from 'employees/components/EmployeesPage';

const store = configureStore();

export default function App() {
  console.debug('App started');
  return (
    <>
      <link
        rel='stylesheet'
        href='https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
        integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T'
        crossOrigin='anonymous'
      />
      <Router>
        <Provider store={store}>
          <EmployeePage />
        </Provider>
      </Router>
    </>
  );
}
