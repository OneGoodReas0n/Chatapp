import React from 'react'
import './main.scss'

export default () => {
    return (
        <div>
            <div className="sidebar">
                <div className="chats"></div>
                <div className="active-users"></div>
            </div>
            <div className="main-content">
                <div className="chat-placeholder"></div>
                <div className="chat-ui"></div>
            </div>
        </div>
    )
}