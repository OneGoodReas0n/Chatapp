import React from 'react'
import './style.scss'
import { useForm } from '../../containers/Home/useForm';
import { useDispatch, useSelector } from 'react-redux'

export default () => {
    const [values, setValues] = useForm({ email: "", password: "", name: "", nickname: "" })
    const dispatch = useDispatch()
    const { user, errors, isAuthorized } = useSelector(state => state.auth)
    const signUp = e => {
        e.preventDefault()
        dispatch(signUp(values))
    }
    return (
        <div className="form">
            {errors !== null && errors !== undefined ? <p className="error">{errors.form}</p> : ""}
            <form>
                <div className="form-group">
                    <label>Name</label>
                    <input name="name" className="form-control" value={values.name} onChange={setValues} />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input name="email" className="form-control" value={values.email} onChange={setValues} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input name="password" type="password" className="form-control" value={values.password} onChange={setValues} />
                </div>
                <div className="form-group">
                    <label>Nickname</label>
                    <input name="nickname" className="form-control" value={values.nickname} onChange={setValues} />
                </div>
                <button className="float-right btn btn-primary" onClick={signUp}>Sign up</button>
            </form>
        </div>
    )
}