import { combineReducers } from 'redux';
import loginReducer from '../../views/Login/loginReducer';
const rootReducer = combineReducers({
    login: loginReducer
});

export default rootReducer;