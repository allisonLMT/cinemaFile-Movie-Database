import React from 'react';
import styles from '../styles/movies.module.css';
import RatingCircle from '../components/MovieRatingCircle.js';
import OverviewOverlay from '../components/OverviewOverlay';
import { BASE_URL, SM_POSTER_SIZE } from '../globals/variables.js';


// movie poster, rating at top right
//under poster, title, release date and more info icon (link which gives a pop up with the summary)


function Movies ({ moviesData }) {
    
  
    return (
        <div className={styles.movies}>
            
            {moviesData.map(movie => 
                <div className={styles.movie} key={movie.id}>
                    <RatingCircle rating={movie.vote_average}/>
                    {/* add onClick to img? change class on OverviewOverlay show/hide? */}
                        <img src={BASE_URL+SM_POSTER_SIZE+movie.poster_path} alt={movie.title} />
                    
                    <h3>{movie.title}</h3>
                    <p className={styles.date}>{movie.release_date}</p>
                    
                    <OverviewOverlay movie={movie}/>
                
                </div>
                
                )} 
                {/* end of map */}


            
        </div>
    )
};

export default Movies;