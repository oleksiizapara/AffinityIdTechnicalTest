import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, { MockedApp } from './App';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

if (
  process.env.NODE_ENV === 'development' &&
  process.env.REACT_APP_IS_MOCKED === 'true'
) {
  ReactDOM.render(<MockedApp />, document.getElementById('root'));
  registerServiceWorker();
} else {
  ReactDOM.render(<App />, document.getElementById('root'));
  registerServiceWorker();
}
