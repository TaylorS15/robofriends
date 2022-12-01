import React from 'react';
import '../scss/Components.css'

const Search = ({searchChange}) => {
    return (
        <div className='sr-cont'>
            <input type='search' placeholder='search robots' onChange={searchChange}/>
        </div>
    )
}

export default Search;