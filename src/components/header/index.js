import React from 'react'
import {Link} from 'react-router-dom'
import './header.scss'

export default () => {

    return (
        <div>
            <div className="header">
                <div className="logo float-left">Chat App</div>
                <div className="menu float-right">
                    <ul>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/signup">Sign Up</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}