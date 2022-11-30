import React from 'react'
import Cards from './Cards'

const CardList = ({robots}) => {
    return (
        <div className='container'>{
            robots.map((el, i) => {
                return <Cards
                    key={i}
                    id={robots[i].id}
                    name={robots[i].name}
                    email={robots[i].email}/>
                })
        }</div>
    )
}

export default CardList;