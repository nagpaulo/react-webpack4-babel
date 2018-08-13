import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import RecuperarSenha from './recuperarSenha';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    componentWillMount() {
        this.setState({ show: false, actions: [] })
    }

    handleClose() {
        this.setState({ show: false });
    }
    
    handleShow() {
        this.setState({ show: true });
    }

    render() {
        const { handleSubmit, submitting, onSubmitModal } = this.props;
        return (
            <div className="col-md-6 login">
                <h3>Área Restrita</h3>
                <p>Realize seu login utilizando sua conta.</p>
                <form method="post" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <Field name="usuario" className="form" placeholder="Usuário" component="input" type="text" />
                    </div>
                    <div className="form-group">
                        <Field name="senha" className="form" placeholder="Senha" component="input" type="password" />
                    </div>
                    <div className="row">
                        <div className="col-xs-6">
                            <div className="checkbox">
                                <label><input type="checkbox" value="" />Lembre-me</label>
                            </div>
                        </div>

                        <div className="col-xs-6 text-right margin-top-10">
                            <a href="#" onClick={this.handleShow}>Esqueçeu a senha?</a>
                        </div>
                    </div>
                    <button type="submit" className="btn" disabled={submitting}><FontAwesomeIcon icon="share-square" /> Acessar</button>
                </form>
                <RecuperarSenha handleClose={this.handleClose} show={this.state.show} onSubmit={onSubmitModal}/>
            </div>
        )
    }
}

export default reduxForm({ form: 'loginForm' })(LoginForm);