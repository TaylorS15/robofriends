import React from 'react';
import './scss/Background.css'

const BackgroundGenerator = ({color1, colorChange}) => {
    return (
        <div>
            <h1>Background Generator</h1>
            <input className="color1" type="color" name="color1" value={color1} onChange={colorChange}/>
            <h2>Current CSS Background</h2>
	        <h3 className="color-output">{`Colors: ${color1}`}</h3>
        </div>
    )
}

export default BackgroundGenerator;