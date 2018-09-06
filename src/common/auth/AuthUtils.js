import { sessionService } from 'redux-react-session';

class AuthUtils {

    static setSessionServicesUser(currentUser){
        sessionService.saveUser(currentUser);
        AuthUtils.setInitSessionServices(currentUser.refresh_token);
    }

    static setInitSessionServices(token){
        sessionService.saveSession(token);
    }

    static cleanSessionServicesUser() {
        sessionService.deleteUser();
        AuthUtils.cleanSessionServices();
    }

    static cleanSessionServices(){
        sessionService.deleteSession();
    }

    static getSessionUser() {
        const user = sessionService.loadUser();
        return user ? user : null;

    }

    static getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    static getRefreshToken() {
        const currentUser = AuthUtils.getSessionUser();
        return currentUser ? currentUser.refresh_token : null;
    }
}

export default AuthUtils;