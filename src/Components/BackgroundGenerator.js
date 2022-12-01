import React from 'react';

const BackgroundGenerator = ({colorChange}) => {
    return (
        <div className='bg-cont'>
            <h1>Background Picker</h1>
            <input type="color" name="color1" onChange={colorChange}/>
        </div>
    )
}

export default BackgroundGenerator;