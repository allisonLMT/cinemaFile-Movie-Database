import React from 'react';
import OneMovie from '../components/OneMovie.js';
import styles from '../styles/movies.module.css';




function Movies ({ moviesData }) {
    
  
    return (
        <div className={styles.movies}>
            
            {moviesData.map(movie => 
                    <OneMovie movie={movie} key={movie.id}/>
                )} 
                {/* end of map */}


            
        </div>
    )
};

export default Movies;