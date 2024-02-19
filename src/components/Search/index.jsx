/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import './search.css'

const Search = ({ search, setSearch }) => {
    return (
        <div className=' search-container'>
            <div className='input-container'>
                <input type='text' value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder='Digite para pesquisar...'
                />
                <AiOutlineSearch className="search-icon" />
            </div>
        </div>
    )
}

export default Search