import React, { Component } from 'react';
import logo from '../../assets/img/logo_gov_white.png';

class Login extends Component {
    render(){
        const message = "This is OK! Login";
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

                                    <div className="col-md-6 login">
                                        <h3>Área Restrita</h3>
                                        <p>Realize seu login utilizando sua conta da secrtetária.</p>
                                        <form method="post" action="#">
                                            <div className="form-group">
                                                <input type="email" className="form" placeholder="Úsuario"/>
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form" placeholder="Senha"/>
                                            </div>
                                            <div className="row">
                                                <div className="col-xs-6">
                                                    <div className="checkbox">
                                                        <label><input type="checkbox" value=""/>Lembre-me</label>
                                                    </div>
                                                </div>

                                                <div className="col-xs-6 text-right margin-top-10">
                                                    <a href="#">Esqueçeu a senha?</a>
                                                </div>
                                            </div>
                                            <button type="button" className="btn">Acessar</button>

                                        </form>

                                    </div>
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
export default Login;