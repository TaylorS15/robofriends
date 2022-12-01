import React from 'react';

const BackgroundGenerator = ({colorChange}) => {
    return (
        <>
            <h1>Background Generator</h1>
            <input type="color" name="color1" onChange={colorChange}/>
        </>
    )
}

export default BackgroundGenerator;