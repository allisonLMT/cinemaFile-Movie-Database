import React, { useState } from 'react';
import styles from '../styles/searchBar.module.css';



function SearchBar ({ handleSearchTerm }) {
    // used to hold/update the search term
    const [input, setInput] = useState('');

    function handleInput(inputValue) {
        console.log('handling input')
        console.log('orig input', inputValue)
        // not sure I need to sanitize *******************
        // const regex = /[^a-z0-9.]+/i;
        // const sanitizedInputValue = inputValue.replace(regex, '');
        // console.log('sanitized',inputValue)
        setInput(inputValue);
        handleSearchTerm(input);
    };
    

    return (
        <div className={styles.search}>
            <input type="text" placeholder="Search by Movie Title..." 
            value={input}
            onInput={(e) => { handleInput(e.target.value) }} />
        </div>
    )
}

export default SearchBar;