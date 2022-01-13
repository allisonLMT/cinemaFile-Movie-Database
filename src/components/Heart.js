import React from 'react';
import styles from '../styles/heart.module.css';

// Heart favorite icon
// is shown as either heart+ or shaded in (toggle class? add to favorites)

function Heart() {
    return (
        <div className={styles.heart}>
            <p>+</p>
        </div>
    )
}

export default Heart;