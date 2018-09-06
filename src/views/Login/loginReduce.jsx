const INITIAL_STATE = { detalhe: [] }

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'DETALHE_USER':
            return { ...state, detalhe: action.payload }
        default: 
            return state
    }
}