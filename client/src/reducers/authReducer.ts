import { 
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    REGISTER_FAIL,
    REISTER_SUCCESS
} from '../actions/types';


interface IState {
    token: string | null,
    isAuthenticated: boolean | null,
    isLoading: boolean,
    user: any
}

const initialState: IState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null
}


export default function(state = initialState, action): IState {
    switch (action.type) {
        case USER_LOADING: 
            return {
                ...state,
                isLoading: true
            }
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,
                isLoading: false
            }
        case LOGIN_SUCCESS:
        case REISTER_SUCCESS: 
        localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                user: action.payload,
                isLoading: false
            }
        case AUTH_ERROR: 
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
        case REGISTER_FAIL:
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false
            }
        default: 
            return state
            
        
        
    }
}