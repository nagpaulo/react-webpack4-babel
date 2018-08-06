import React from 'react';
import Router from '../main/config/routes';
import Messages from '../common/msg/messages';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

import '../assets/css/bootstrap-drawer.css';
import '../assets/css/menu.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import '../common/icons/icons';

import $ from 'jquery';
import metismenu from 'metismenu';
import bootstrap from 'bootstrap';

export default props => (
    <div className="container-fluid">
        <Router />
        <Messages />
    </div>
)