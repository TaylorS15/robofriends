import React from 'react'
import './scss/Cards.css'

const Cards = ({name, email, id}) => {

    return (
        <div className='card'>
            <img alt='robot' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Cards