import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from '../../views/Login/login';

const RouterConfig = () => (
    <Router>
        <Route exact path="/" component={Login} />
    </Router>
  );

$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});

export default RouterConfig;