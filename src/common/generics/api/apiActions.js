const isAuthFailed = (response) => response.status === 401 && response.url.includes(SERVICE_URL);

export const isExpiredToken = (response) => {
    if (isAuthFailed(response)) {
        return response.clone().json().then(json => {
            return Promise.resolve(json.errorCode === 'TOKEN_EXPIRED');
        });
    } else {
        return Promise.resolve(false);
    }
};