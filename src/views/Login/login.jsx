import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import LoginForm from './loginForm';
import { authentication, recuperarSenha } from './loginAction';

import logo from '../../assets/img/logo_gov_white.png';

class Login extends Component {
    render(){
        const { authentication } = this.props;
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
                                    <LoginForm onSubmit={ authentication } onSubmitModal={ recuperarSenha }/>
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
const mapDispatchToProps = dispatch => bindActionCreators({ authentication, recuperarSenha },dispatch)
export default connect(null, mapDispatchToProps)(Login);