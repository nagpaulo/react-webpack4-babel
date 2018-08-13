import React from 'react';

export const logoutUser = () => {
    return dispatch => {
      //dispatch(requestLogout())
      localStorage.removeItem('__tk')
      //dispatch(receiveLogout())
    }
}

export const localStorageToken = (data) => {       
    return dispatch => {
        localStorage.setItem('__tk', data.access_token)
        localStorage.setItem('__tk', data.refresh_token)
    }
}

export const removerToken = () => {
    return dispatch => {
        localStorage.removeItem('__tk')
    }
}