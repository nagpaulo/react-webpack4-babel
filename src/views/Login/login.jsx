import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import LoginForm from './loginForm';
import { authentication, recuperarSenha, logout } from './loginAction';

import logo from '../../assets/img/logo_gov_white.png';

class Login extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const { actions } = this.props;
        return (
            <div className="row-fluid">
                <div className="centering">

                    <div className="col-sm-8 col-sm-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-body padding-0">

                                <div className="row">
                                    <div className="col-md-6 logo-top hidden-md hidden-lg text-center">
                                        <img src={logo} alt={"logo"} />
                                    </div>
                                    <LoginForm onSubmit={ actions.authentication } onSubmitModal={ recuperarSenha }/>
                                    <div className="col-md-6 logo-right text-center vertical-align hidden-xs hidden-sm">
                                        <img className="img-responsive text-center vcenter" src={logo} alt={"logo"}/>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

const { object } = PropTypes;

Login.propTypes = {
    actions: object.isRequired
};

const mapDispatchToProps = dispatch => { 
    return { actions: bindActionCreators({ authentication, recuperarSenha, logout },dispatch) };
}
export default connect(null, mapDispatchToProps)(Login);