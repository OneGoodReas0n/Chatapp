import { LOGIN_SUCCESS, LOGIN_ERROR, SERVER } from "./constants";
import jwt from 'jsonwebtoken'
import axios from "axios"

export const loginSuccess = user => {
    return {
        type: LOGIN_SUCCESS,
        user
    }
}

export const loginError = error => {
    return {
        type: LOGIN_ERROR,
        error
    }
}

export const login = data => {
    return dispatch => {
        axios.post(`${SERVER}/signin`, data)
            .then(res => {
                const token = res.token
                localStorage.setItem('token', token)
                dispatch(loginSuccess(jwt.decode(token)))
            })
            .catch(error => {
                dispatch(loginError(error))
            })
    }
}

export const signUp = data => {
    return dispatch => {
        axios.post(`${SERVER}/signup`,data)
            .then(res => {
                console.log(res.data.user)
                setTimeout(()=>{
                },1000)
            })
            .catch(err => {
                console.log(err)
            })
    }
}