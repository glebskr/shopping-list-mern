import {GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING} from '../actions/types'

interface IAction {
    type: string, 
    payload: any
}


const initialState = {
    items: [{_id: 228}],
    loading: false
}


export default function(state = initialState, action: IAction  ) {
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state,
                items: action.payload,
                loading: false
            }
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item._id !== action.payload)
            }
        case ADD_ITEM: 
            return {
                ...state,
                items: [action.payload, ...state.items]
            }
        case ITEMS_LOADING: 
            return {
                ...state,
                loading: true
            }
        default:
            return state

    }
}