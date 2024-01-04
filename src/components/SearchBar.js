import React from 'react';
import styles from '../styles/searchBar.module.css';



function SearchBar ({ handleSearchTerm, input, handleSearchInput }) {

    function handleInput(inputValue) {
        
        const regex = /[^a-z0-9.]+/i;
        const sanitizedInputValue = inputValue.replace(regex, '');
       
        //sets the input value to the users input (as-is)
        handleSearchInput(inputValue);

        //sets the search term that is used to fetch the API data to the sanitized term
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