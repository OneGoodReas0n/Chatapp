import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './style.scss'
import { useForm } from '../../containers/Home/useForm';
import { login } from '../../containers/Home/actions';
import { Link } from 'react-router-dom'

export default () => {

    const [values, setValues] = useForm({ email: "", password: "" })
    const dispatch = useDispatch()
    const { user, errors, isAuthorized } = useSelector(state => state.auth)
    const logIn = e => {
        e.preventDefault()
        dispatch(login(values))
    }

    return (
        <div className="form">
            {errors !== null && errors !== undefined ? <p className="error">{errors.form}</p> : ""}
            <form>
                <div className="form-group">
                    <label>Email</label>
                    <input name="email" className="form-control" value={values.email} onChange={setValues} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input name="password" type="password" className="form-control" value={values.password} onChange={setValues} />
                </div>
                <Link className="float-left btn btn-light" to='/signup'>Registration</Link>
                <button className="float-right btn btn-primary" onClick={logIn}>Login</button>
            </form>
        </div>
    )
}