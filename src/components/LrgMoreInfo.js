import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/lrgMoreInfo.module.css';



function LrgMoreInfo( {movie} ) {
    return (
        <div className={`${styles.lrgMoreInfo} ${styles.hover}`}>
            <Link to={`/movie/${movie.id}`}>more info</Link>
        </div>
    )
}

export default LrgMoreInfo;