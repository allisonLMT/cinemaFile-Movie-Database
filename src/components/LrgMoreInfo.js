import React from 'react';
import styles from '../styles/lrgMoreInfo.module.css';

//need to dynamically generate where the link will go to
//<a href="">more info</a>
//useState to manage hover state? 

function LrgMoreInfo() {
    return (
        <div className={`${styles.lrgMoreInfo} ${styles.hover}`}>
            <p>more info</p>
        </div>
    )
}

export default LrgMoreInfo;