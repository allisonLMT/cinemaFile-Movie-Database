import React from 'react';
import styles from '../styles/dropDownSort.module.css';

function DropDownSort () {
    return (
        <div className={styles.sort}>
            {/* do I need conditionals that set the config for the mdb? */}
            <div>
                <p>Popular</p>
            </div>
            <div>
                <p>Top Rated</p>
            </div>
            <div>
                <p>Now Playing</p>
            </div>
            <div>
                <p>Upcoming</p>
            </div>
        </div>
    )
};

export default DropDownSort;