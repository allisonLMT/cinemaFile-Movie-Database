import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/smMoreInfo.module.css';

function SmMoreInfo () {

    return (
        <div className={styles.smMoreInfo}>
            <Link to={`/movie/${movie.id}`}>more info</Link>
        </div>
    )
}

export default SmMoreInfo;