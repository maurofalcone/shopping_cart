import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from 'redux/store.js';
import './index.css';
import Login from 'components/routes/login';
import App from 'components/app';

ReactDOM.render(
  <Provider store={store}>
    <App>
      <Router>
        <Switch>
          <Route path='/login' component={Login} />
        </Switch>
      </Router>
    </App>
  </Provider>
  , document.getElementById('root'));
