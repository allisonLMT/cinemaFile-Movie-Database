// need to create the circle and dynamically add the rating
import React from 'react';
import styles from '../styles/movieRatingCircle.module.css';

function MovieRatingCircle () {
    return (
        <div className={styles.circle}>
            <p>98%</p>
        </div>
    )
}

export default MovieRatingCircle;