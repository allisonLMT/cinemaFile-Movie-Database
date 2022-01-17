import React from 'react';
import styles from '../styles/movies.module.css';
import noPoster from '../images/no-movie-poster.jpg';
import RatingCircle from '../components/MovieRatingCircle.js';
import Heart from '../components/Heart.js';

import { BASE_URL, SM_POSTER_SIZE } from '../globals/variables.js';


// movie poster, rating at top right
//under poster, title, release date and more info icon (link which gives a pop up with the summary)


function Movies ({ moviesData }) {
    
  
    return (
        <div className={styles.movies}>
            
            {moviesData.map(movie => 
                <div className={styles.movie} key={movie.id}>
                    <div className={styles.poster}>
                        <RatingCircle rating={movie.vote_average}/>
                        {movie.poster_path === null ?
                            <img src={noPoster} alt="No Poster Available." /> :
                            <img src={BASE_URL+SM_POSTER_SIZE+movie.poster_path} alt={movie.title} />
                        }
                    </div>
                    <div className={styles.belowPoster}>
                        <h3>{movie.title}</h3>
                        <div className={styles.dateHeart}>
                            <p className={styles.date}>{movie.release_date}</p>
                            <Heart title={movie.title}/>
                        </div>
                    </div>
                </div>
                
                )} 
                {/* end of map */}


            
        </div>
    )
};

export default Movies;