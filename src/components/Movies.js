import React from 'react';
import styles from '../styles/movies.module.css';
import RatingCircle from '../components/MovieRatingCircle.js';
import LrgMoreInfo from '../components/LrgMoreInfo';
import { BASE_URL, SM_POSTER_SIZE } from '../globals/variables.js';

// movie poster, rating at top right
//under poster, title, release date and more info icon (link which gives a pop up with the summary)

//need to build the url for the img
//neeed to get the poster file path from the moviesData prop

function Movies ({ moviesData }) {
    
    // const imgURLstart = BASE_URL+SM_POSTER_SIZE;
      console.log(moviesData);
    //  console.log(imgURLstart)
    return (
        <div className={styles.movies}>

            {moviesData.map(movie => 
                <div key={movie.id}>
                <img src={BASE_URL+SM_POSTER_SIZE+movie.poster_path} alt={movie.title} />
                <h3>{movie.title}</h3>
                <p>{movie.overview}</p>
                <p>Release Date: {movie.release_date}</p>
                </div>
                )}



            <RatingCircle />
            <LrgMoreInfo />
            
            {/* <img src=`${BASE_URL}+"w500"+${API_KEY}` alt="" /> */}
            {/* <img src="https://api.themoviedb.org/3/configuration?api_key=API_KEY" alt="" /> */}
        </div>
    )
};

export default Movies;