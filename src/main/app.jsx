import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import '../assets/css/bootstrap-drawer.css';
import '../assets/css/menu.css';

import Router from '../main/config/routes';
import Messages from '../common/msg/messages';

import $ from 'jquery';
import metismenu from 'metismenu';
import bootstrap from 'bootstrap';

export default props => (
    <div className="container-fluid">
        <Router />
        <Messages />
    </div>
)