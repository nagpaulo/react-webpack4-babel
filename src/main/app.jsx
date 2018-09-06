import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

import '../assets/css/bootstrap-drawer.css';
import '../assets/css/menu.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import '../common/icons/icons';

import $ from 'jquery';
import metismenu from 'metismenu';
import bootstrap from 'bootstrap';

import PropTypes from 'prop-types';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import PrivateRoute from '../main/config/privateRoute';
import History from '../main/config/history';

import { LoadableHome, LoadableLogin, LoadableMatriculaInicial } from '../main/config/loadable';

const App = ({ authenticated, checked }) => (
  <Router history={History}>
    { checked &&
        <Switch>
          <PrivateRoute exact path="/home" component={LoadableHome} authenticated={authenticated}/>
          <PrivateRoute exact path="/matricula-inicial" component={LoadableMatriculaInicial} authenticated={authenticated}/>
          <Route path="/login" component={LoadableLogin}/>
          <Redirect from='/' to='/login'/>
        </Switch>
    }
  </Router>
);

const { bool } = PropTypes;

App.propTypes = {
  authenticated: bool.isRequired,
  checked: bool.isRequired
};

const mapState = ({ session }) => ({
  checked: session.checked,
  authenticated: session.authenticated
});

export default connect(mapState)(App);