import React from 'react'
import '../scss/Components.css'

const Background = (props) => {
    return (
        <div className="b-cont" style={props.color}>
            {props.children}
        </div>
    )
}

export default Background;