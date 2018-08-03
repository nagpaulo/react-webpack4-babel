import axios from 'axios';
import { toastr } from 'react-redux-toastr';

const URL = 'http://localhost:8080';

export function authentication(values) {

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
            })
            .catch(resp => { 
                toastr.error('Acesso negado','Você deve estar autenticado no sistema para acessar.') 
            });
    }else{
        toastr.warning('Campos Obrigatório!','Usuario ou Senha não informado.')
    }
    return {
        type: 'AUTENTICACAO_LOGIN'
    }
}

export function recuperarSenha(values){
    console.log(values);
    return {
        type: 'RECUPERAR_SENHA'
    }
}