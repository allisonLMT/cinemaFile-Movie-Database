import React from 'react';
import OneMovie from '../components/OneMovie.js';
import styles from '../styles/movies.module.css';


function Movies ({ moviesData, localFaves, handleUpdateFaves }) {
    
  
    return (
        <div className={styles.movies}> 
            {moviesData.map(movie => 
                    <OneMovie movie={movie} localFaves={localFaves} handleUpdateFaves={handleUpdateFaves} key={movie.id}/>
            )}   
        </div>
    )
};

export default Movies;