import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../assets/css/base.css';
import '../assets/css/bootstrap-drawer.css';
import '../assets/css/menu.css';

import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from '../views/login';

import jquery from 'jquery';
import metismenu from 'metismenu';
import bootstrap from 'bootstrap';

const RouterConfig = () => (
    <Router>
        <Route exact path="/" component={Login} />
    </Router>
  );
  
  export default RouterConfig;