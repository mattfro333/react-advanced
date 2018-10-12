import React from 'react';
import ReactDOM from 'react-dom';
import StateAPI from 'state-api';
import App from '../App';

const store = new StateApi(window.initialData);

ReactDOM.hydrate(
  <App store={store} />,
  document.getElementById('root')
);
