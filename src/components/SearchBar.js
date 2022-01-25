import React, { useState } from 'react';
import styles from '../styles/searchBar.module.css';



function SearchBar ({ handleSearchTerm }) {
    // used to hold/update the search term shown in the search bar
    const [input, setInput] = useState('');

    function handleInput(inputValue) {
        
        const regex = /[^a-z0-9.]+/i;
        const sanitizedInputValue = inputValue.replace(regex, '');
       
        setInput(inputValue);

        //handles the search term that is used in the actual fetching of data from the API
        handleSearchTerm(sanitizedInputValue);
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