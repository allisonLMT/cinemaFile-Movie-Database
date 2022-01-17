import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/lrgMoreInfo.module.css';



function LrgMoreInfo( {movie} ) {
    return (
        <div>
            <Link to={`/movie/${movie.id}`} className={`${styles.lrgMoreInfo} ${styles.hover}`}>more info</Link>
        </div>
    )
}

export default LrgMoreInfo;