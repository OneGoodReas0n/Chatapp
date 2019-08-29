import { LOGIN_ERROR, LOGIN_SUCCESS } from './constants'

const initialState = {
    isAuthorized: false,
    user: {},
    errors: undefined
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthorized:true,
                user: action.user
            }
        case LOGIN_ERROR:
            return {
                ...state,
                errors: action.error.response.data
            }
        default:
            return state;
    }
}