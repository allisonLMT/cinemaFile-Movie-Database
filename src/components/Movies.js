import React from 'react';
import styles from '../styles/movies.module.css';
import RatingCircle from '../components/MovieRatingCircle.js';
import LrgMoreInfo from '../components/LrgMoreInfo';
//import { BASE_URL, API_KEY } from '../globals/variables.js';

// movie poster, rating at top right
//under poster, title, release date and more info icon (link which gives a pop up with the summary)


function Movies () {
    return (
        <div className={styles.movies}>
            <RatingCircle />
            <LrgMoreInfo />
            {/* <img src=`${BASE_URL}+"w500"+${API_KEY}` alt="" /> */}
            {/* <img src="https://api.themoviedb.org/3/configuration?api_key=API_KEY" alt="" /> */}
        </div>
    )
};

export default Movies;