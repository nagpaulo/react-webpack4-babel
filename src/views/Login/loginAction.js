import axios from 'axios';

const URL = 'http://localhost:8080/auth';

export const changeUsername = event => ({
    type: "USERNAME_CHANGED",
    payload: event.target.value
});

export const changePassoword = event => ({
    type: "PASSWORD_CHANGED",
    payload: event.target.value
});

export const autenticacao = (username,password) => {
    var body = {
        email: username,
	    senha: password
    }
    let axiosConfig = {
        headers: {
            'async': true,
            'crossDomain': true,
            'Access-Control-Allow-Origin': '*',
            'Content-Type':'application/json',
            'Cache-Control': 'no-cache',
        }
      };

    return dispatch => {
        axios.post(URL,body,axiosConfig)
            .then( resp => dispatch({ type: 'LOGGED', payload: resp.data }) )
    }
}