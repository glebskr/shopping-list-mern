import {GET_ERRORS, CLEAR_ERRORS} from '../actions/types'


interface IState {
    msg: {}
    status: null | string,
    id: number
}

const initialState: IState = {
    msg: {},
    status: null,
    id: null
}


export default function(state = initialState, action ): IState {
    switch(action.type) {
        case GET_ERRORS: 
            return { 
                msg: action.payload.msg,
                status: action.payload.status,
                id: action.payload.id
            }
        case CLEAR_ERRORS:
            return {
                msg: {},
                status: null,
                id: null
            }
        default: 
            return state
    }
}