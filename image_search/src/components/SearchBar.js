import { useState } from "react"

import './SearchBar.css'

const SearchBar = ({ handleSearch }) => {
    const [term, setTerm] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        handleSearch(term)
        setTerm('')
    }

    return (
        <div className="search-bar">
            <form onSubmit={handleSubmit}>
                <label>Type to search</label>
                <input value={term} onChange={(event) => setTerm(event.target.value)}/>
            </form>
        </div>
    )
}

export default SearchBar