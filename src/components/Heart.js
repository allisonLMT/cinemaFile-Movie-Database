import React from 'react';
import styles from '../styles/heart.module.css';

// Heart favorite icon
// is shown as either heart+ or shaded in (toggle class? add to favorites)

function Heart({title}) {

    // needs an event listener to toggle favorite
    //useState to manage if it's in favorites or not? What heart should it show?

    return (
        <div className={styles.heart}>
            <p>+</p>
        </div>
    )
}

export default Heart;