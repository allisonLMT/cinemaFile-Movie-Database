import React from 'react';
import styles from '../styles/movieRatingCircle.module.css';

function MovieRatingCircle ({rating, isTopMovie}) {
    
    const percent = rating * 10;
    
    return (
        <div className={isTopMovie ? styles.topRatingCircle : styles.circle}>
            <p className={styles.percent}>{percent}%</p>
        </div>
    )
}

export default MovieRatingCircle;