import React from 'react';
import styles from '../styles/topMovie.module.css';
import RatingCircle from '../components/MovieRatingCircle.js';
import LrgMoreInfo from '../components/LrgMoreInfo';
import { BASE_URL, SM_POSTER_SIZE } from '../globals/variables.js';



function TopMovie ({ topMovieData }) {
   
    return (
        <div className={styles.topMovie}>
            <RatingCircle rating={topMovieData[0].vote_average}/>
            <img src={BASE_URL+SM_POSTER_SIZE+topMovieData[0].poster_path} alt={topMovieData.title} />
            <LrgMoreInfo />
            <h3>{topMovieData[0].title}</h3>
            <p className={styles.date}>{topMovieData[0].release_date}</p> 
            {/* <p>{topMovieData[0].overview}</p> */}
        </div>
    )
}

export default TopMovie;