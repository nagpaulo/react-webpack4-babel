import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { reduxForm, Field } from 'redux-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import labelAndInput from '../../common/form/labelAndInput';

class RecuperarSenha extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const { show, handleClose, onSubmitModal,submitting } = this.props;
        return(
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Recuperar Senha</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form action="">
                        <div className="row">
                            <Field name="usuario" component={labelAndInput} cols="12 12" 
                                placeholder="Infome o usuário"/>
                            <Field name="email" component={labelAndInput} cols="12 12" 
                                placeholder="Informe o email."/>
                            <Field name="cpf" component={labelAndInput} cols="12 12" 
                                placeholder="Informe o CPF."/>
                        </div>
                    </form>    
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