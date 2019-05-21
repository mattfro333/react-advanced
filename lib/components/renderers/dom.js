import React from 'react';
import ReactDOM from 'react-dom';
import StateApi from '../.././state-api/lib/index';
import App from '../App';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

const store = new StateApi(window.initialData);

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/home" component={App} />
      <Redirect from="/" to="/home" />
    </Switch>
  </BrowserRouter>
);

ReactDOM.hydrate(routes,
  <App store={store} />,
  document.getElementById('root')
);
