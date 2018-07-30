const INITIAL_STATE = { username: '', password: '' }
export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'LOGGED': 
            return { ...state, username: action.payload } 
        case 'USERNAME_CHANGED': 
            return { ...state, username: action.payload }  
        case 'PASSWORD_CHANGED': 
            return { ...state, password: action.payload }  
        default: 
            return state
    }
}