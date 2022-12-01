import React from 'react'
import '../scss/Components.css'

const Cards = ({name, email, id}) => {

    return (
        <div className='card'>
            <img alt='robot' src={`https://robohash.org/${id}?150x150`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Cards