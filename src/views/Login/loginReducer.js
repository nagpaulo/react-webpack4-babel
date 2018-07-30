
const INITIAL_STATE = { username: '', password: '' }

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'LOGGED': 
            return { ...state, username: action.payload.username, password: action.payload.password }  
        default: 
            return state
    }
}