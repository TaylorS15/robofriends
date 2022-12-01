import React from 'react'
import './scss/Background.css'

const Background = (props) => {
    return (
        <div className="bg-cont" style={props.color}>
            {props.children}
        </div>
    )
}

export default Background;