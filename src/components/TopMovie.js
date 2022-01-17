import React from 'react';
import styles from '../styles/topMovie.module.css';
import RatingCircle from '../components/MovieRatingCircle.js';
import LrgMoreInfo from '../components/LrgMoreInfo';
import { BASE_URL, SM_POSTER_SIZE } from '../globals/variables.js';



function TopMovie ({ topMovieData }) {
   
    return (
        <div className={styles.topMovie}>
            <div className={styles.topMoviePoster}>
                <RatingCircle rating={topMovieData[0].vote_average} className={styles.topMovieRating} />
                <LrgMoreInfo movie={topMovieData[0]}/>
                <img src={BASE_URL+SM_POSTER_SIZE+topMovieData[0].poster_path} alt={topMovieData.title} />
            </div>

            <h3>{topMovieData[0].title}</h3>
            <p className={styles.date}>{topMovieData[0].release_date}</p> 
            
        </div>
    )
}

export default TopMovie;