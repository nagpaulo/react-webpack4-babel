import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { reduxForm, Field } from 'redux-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class RecuperarSenha extends Component {
    constructor(props){
        super(props);
        console.log(props);
    }

    render(){
        const { show, handleClose, onSubmitModal,submitting } = this.props;
        return(
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Recuperar Senha</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <Field name="usuario" className="form-control" placeholder="Usuário" component="input" type="text" />
                            </div>
                            <div className="form-group">
                                <Field name="email" className="form-control" placeholder="email" component="input" type="password" />
                            </div>
                            <div className="form-group">
                                <Field name="cpf" className="form-control" placeholder="CPF" component="input" type="password" />
                            </div>
                        </div>
                    </div>    
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose} className="btn btn-default"><FontAwesomeIcon icon="times-circle" />  Fechar</Button>
                    <Button onClick={onSubmitModal} className="btn" disabled={submitting}><FontAwesomeIcon icon="share-square" /> Enviar</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default reduxForm({ form: 'recuperarSenha' })(RecuperarSenha);