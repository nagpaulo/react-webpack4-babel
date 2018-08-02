import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class LoginForm extends Component {
    render(){
        const { handleSubmit } = this.props;
        return(
            <div className="col-md-6 login">
                <h3>Área Restrita</h3>
                <p>Realize seu login utilizando sua conta.</p>
                <form method="post" onSubmit={ handleSubmit }>
                    <div className="form-group">
                        <Field name="email" className="form" placeholder="Usuario" component="input" type="text"/>
                    </div>
                    <div className="form-group">
                        <Field name="password" className="form" placeholder="Senha" component="input" type="password"/>
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
                    <button type="submit" className="btn">Acessar</button>
                </form>
            </div>
        )
    }
}

export default reduxForm({form: 'loginForm'})(LoginForm);