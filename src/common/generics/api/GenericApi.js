import { isExpiredToken } from "./apiActions";
import { APPLICATION } from '../../../main/config/configServer';
import AuthUtils from '../../../common/auth/AuthUtils';
import axios from 'axios';

export function init() {
    axios.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        const { config,response: { status } } = error
        const originalRequest = config;
      
        if (status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            const URL = APPLICATION.URL_REFRESH_TOKEN_OAUTH;
            AuthUtils.getSessionUser().then(token => {
                console.log(token);
                let axiosConfig = {
                    headers: {
                        'Content-Type':'application/x-www-form-urlencoded',
                        'Authorization': 'Basic ' + new Buffer(`${APPLICATION.USER_GLOBAL}:${APPLICATION.PASS_GLOBAL}`).toString('base64')
                    }
                };
                var body = `refresh_token=${token.refresh_token}`;
                return axios.post(URL,body,axiosConfig)
                .then(resp => {
                        AuthUtils.setSessionServicesUser(resp.data);
                        originalRequest.headers.Authorization = 'Bearer ' + resp.data.access_token
                        return axios(originalRequest);
                    }
                )
            })
        }
      
        return Promise.reject(error);
      });
}