import React from 'react';
import styles from '../styles.movies.module.css';
import RatingCircle from '../components/MovieRatingCircle.js';
import LrgMoreInfo from '../components/LrgMoreInfo';

// movie poster, rating at top right
//under poster, title, release date and more info icon (link which gives a pop up with the summary)


function Movies () {
    return (
        <div className={styles.movies}>
            <RatingCircle />
            <LrgMoreInfo />
        </div>
    )
};

export default Movies;