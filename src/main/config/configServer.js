const CONFIG = {};
CONFIG.USER_GLOBAL = "academico_web";
CONFIG.PASS_GLOBAL = "YFXS7X3ZPWYXAXEB5X2558PX";

CONFIG.SERVER_OAUTH_PROD = "https://.seduc.ce.gov.br/";
CONFIG.SERVER_OAUTH_DEV = "http://172.31.4.121:8080/oauth2seduc/";

CONFIG.SERVER_URL_USER_PROD = "";
CONFIG.SERVER_URL_USER_DEV = "http://172.31.4.121:8080/wseducacenso/oauth-resource/";

CONFIG.SERVER_OAUTH = (location.hostname.indexOf("localhost") != -1 ? CONFIG.SERVER_OAUTH_DEV : CONFIG.SERVER_OAUTH_PROD);
CONFIG.SERVER_URL = (location.hostname.indexOf("localhost") != -1 ? CONFIG.SERVER_URL_USER_DEV : CONFIG.SERVER_URL_USER_PROD);
CONFIG.DEVELOPMENT = (location.hostname.indexOf("localhost") != -1 ? 'DESENVOLVIMENTO' : '');

CONFIG.URL_TOKEN_OAUTH = `${CONFIG.SERVER_OAUTH}oauth/token?grant_type=password`;
CONFIG.URL_REFRESH_TOKEN_OAUTH = `${CONFIG.SERVER_OAUTH}oauth/token?grant_type=refresh_token`;

export const APPLICATION = CONFIG;