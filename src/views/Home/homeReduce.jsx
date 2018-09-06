const INITIAL_STATE = { aviso: [] }

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'AVISOS_CHANGED': 
            return { ...state, listAviso: action.payload }
        default: 
            return state
    }
}
