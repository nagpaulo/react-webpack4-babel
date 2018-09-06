import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';
import { sessionReducer } from 'redux-react-session';
import homeReducer from '../../views/Home/homeReduce';
import usuarioReducer from '../../views/Login/loginReduce';

const rootReducer = combineReducers({
    form: formReducer,
    toastr: toastrReducer,
    session: sessionReducer,
    home: homeReducer,
    usuario: usuarioReducer
});

export default rootReducer;