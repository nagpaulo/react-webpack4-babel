import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { reset as resetForm  } from 'redux-form';
import { APPLICATION } from '../../main/config/configServer';
import { sessionService } from 'redux-react-session';
import history from '../../main/config/history';
import {init} from '../../common/generics/api/GenericApi';
import AuthUtils from '../../common/auth/AuthUtils';

const URL = APPLICATION.URL_TOKEN_OAUTH;

export function authentication(values) {
    return dispatch => {
        let axiosConfig = {
            headers: {
                'Content-Type':'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + new Buffer(`${APPLICATION.USER_GLOBAL}:${APPLICATION.PASS_GLOBAL}`).toString('base64')
            }
        };

        var body = `username=${values.usuario}&password=${values.senha}`

        if(values.usuario && values.senha){
            axios.post(URL,body,axiosConfig)
                .then(resp => {
                    AuthUtils.setSessionServicesUser(resp.data);
                    dispatch([
                        resetForm('loginForm')
                    ]);
                    history.push('/home');
                }).catch(function (error) {
                    AuthUtils.cleanSessionServicesUser();
                    if(error.response.status = 400){                       
                        toastr.error('Acesso negado',`Você deve estar autenticado no sistema para acessar.`) 
                    }else{
                        toastr.error('Error', error.message);
                    }
                });
        }else{
            if(!body.email) toastr.warning('Campo Obrigatório!','Usuario não informado.');
            if(!body.senha) toastr.warning('Campo Obrigatório!','Senha não informado.')
        }
    }
}

export const detalheUsuario = () => {
    return dispatch => {
        let getUser = AuthUtils.getSessionUser();
        let url_ = `${APPLICATION.SERVER_URL_USER_DEV}usuario-logado`;

        getUser.then(function(user){
            let axiosConfig = {
                headers: {
                    'async': true,
                    'crossDomain': true,
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type':'application/json',
                    'Cache-Control': 'no-cache',
                    'Authorization':`${user.token_type} ${user.access_token}` 
                }
            };

            axios.get(url_,axiosConfig)
              .then( resp => dispatch({ type: 'DETALHE_USER', payload: resp.data }))
        });
    }
}


export const recuperarSenha = (values) => {
    console.log(values);
    return {
        type: 'RECUPERAR_SENHA'
    }
}

export const logout = () => {
    AuthUtils.cleanSessionServicesUser();   
    return {
        type: 'LOGOUT'
    }
}