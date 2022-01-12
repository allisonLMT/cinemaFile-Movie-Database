import React from 'react';
import styles from '../styles/topMovie.module.css';
import { BASE_URL, SM_POSTER_SIZE } from '../globals/variables.js';



function TopMovie ({ topMovieData }) {
   
    return (
        <div className={styles.topMovie}>
           <img src={BASE_URL+SM_POSTER_SIZE+topMovieData[0].poster_path} alt={topMovieData.title} />
                <h3>{topMovieData.title}</h3>
                <p>{topMovieData.overview}</p>
                <p>Release Date: {topMovieData.release_date}</p> 
        </div>
    )


}

export default TopMovie;