import axios from 'axios';
import { toastr } from 'react-redux-toastr';

const URL = 'http://localhost:8080';

export function create(values) {
    //console.log(values)
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
        "email": values.email,
        "senha": values.password
    }
    axios.post(url_,body,axiosConfig)
        .then(resp => {
            toastr.success('Sucesso','Operação realizada com sucesso.')
        })
        .catch(resp => { 
            toastr.error('Erro', `Erro encontrado: ${resp.message}`) 
        });
    return {
        type: 'TEMP'
    }
}