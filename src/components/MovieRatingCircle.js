// need to create the circle and dynamically add the rating
import React from 'react';
import styles from '../styles/movieRatingCircle.module.css';

function MovieRatingCircle ({rating}) {
    
    const percent = rating * 10;
    return (
        <div className={styles.circle}>
            <p className={styles.percent}>{percent}%</p>
        </div>
    )
}

export default MovieRatingCircle;