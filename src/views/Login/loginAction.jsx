import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { reset as resetForm  } from 'redux-form';

const URL = 'http://localhost:8080';

export function authentication(values) {
    return dispatch => {
        let url_ = `${URL}/auth`;
        let axiosConfig = {
            headers: {
                'async': true,
                'crossDomain': true,
                'Access-Control-Allow-Origin': '*',
                'Content-Type':'application/json',
                'Cache-Control': 'no-cache'
            }
        };

        var body = {
            "email": values.usuario,
            "senha": values.senha
        }

        if(body.email && body.senha){
            axios.post(url_,body,axiosConfig)
                .then(resp => {
                    toastr.success('Sucesso','Operação realizada com sucesso.')
                    dispatch([
                        resetForm('loginForm')
                    ]);
                })
                .catch(resp => { 
                    toastr.error('Acesso negado','Você deve estar autenticado no sistema para acessar.') 
                });
        }else{
            if(!body.email) toastr.warning('Campo Obrigatório!','Usuario não informado.');
            if(!body.senha) toastr.warning('Campo Obrigatório!','Senha não informado.')
        }
    }
}

export function recuperarSenha(values){
    console.log(values);
    return {
        type: 'RECUPERAR_SENHA'
    }
}