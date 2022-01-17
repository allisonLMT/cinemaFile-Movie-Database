import React, { useCallback } from 'react';
import styles from '../styles/dropDownSort.module.css';

function DropDownSort ({onSortChange}) {

 

    const handleSortChange = useCallback(event => {
        console.log("clicked")
        console.log(event.target.value)
        //onSortChange(event.target.value)
    }, [onSortChange])

    return (
        <div className={styles.sort}>
            {/* do I need conditionals that set the config for the mdb? */}
            <div onClick={handleSortChange} value="popular">
                <p>Popular</p>
            </div>
            <div onClick={handleSortChange} value="top_rated">
                <p>Top Rated</p>
            </div>
            <div onClick={handleSortChange} value="now_playing">
                <p>Now Playing</p>
            </div>
            <div onClick={handleSortChange} value="upcoming">
                <p>Upcoming</p>
            </div>
        </div>
    )
};

export default DropDownSort;