/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'

const Search = ({ search, setSearch }) => {
    return (
        <div className=' Search'>
            <h2>Pesquisar:</h2>
            <input type='text' value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Digite para pesquisar...'
            />
        </div>
    )
}

export default Search