import React from 'react';
import styles from '../styles/movies.module.css';
import RatingCircle from '../components/MovieRatingCircle.js';
import { BASE_URL, SM_POSTER_SIZE } from '../globals/variables.js';

// movie poster, rating at top right
//under poster, title, release date and more info icon (link which gives a pop up with the summary)


function Movies ({ moviesData }) {
    
  
    return (
        <div className={styles.movies}>

            {moviesData.map(movie => 
                <div className={styles.movie} key={movie.id}>
                <img src={BASE_URL+SM_POSTER_SIZE+movie.poster_path} alt={movie.title} />
                <h3>{movie.title}</h3>
                
                <p>{movie.release_date}</p>
                
                {/* <p>{movie.overview}</p> */}
                </div>
                
                )} 
                {/* end of map */}


            <RatingCircle />
            
            
            {/* <img src=`${BASE_URL}+"w500"+${API_KEY}` alt="" /> */}
            {/* <img src="https://api.themoviedb.org/3/configuration?api_key=API_KEY" alt="" /> */}
        </div>
    )
};

export default Movies;