import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/oneMovie.module.css';
import ratingStyles from '../styles/movieRatingCircle.module.css';
import noPoster from '../images/movie-image-not-available.png';
import RatingCircle from '../components/MovieRatingCircle.js';
import Heart from '../components/Heart.js';
import { BASE_URL, SM_POSTER_SIZE } from '../globals/variables.js';



function OneMovie({ movie, localFaves, handleUpdateFaves }) {

    return (
        <div className={styles.movie} key={movie.id}>
            <div className={styles.poster}>
                <RatingCircle rating={movie.vote_average} className={ratingStyles.circle} />
                <Link to={`/movie/${movie.id}`}>
                {movie.poster_path === null ?
                    <img src={noPoster} alt="Movie Poster Not Available" /> :
                    <img src={BASE_URL+SM_POSTER_SIZE+movie.poster_path} alt={movie.title} />
                }
                </Link>
            </div>
            <div className={styles.belowPoster}>
                <h3>{movie.title}</h3>
                <div className={styles.dateHeart}>
                    <p className={styles.date}>{movie.release_date}</p>
                    <Heart movie={movie} localFaves={localFaves} handleUpdateFaves={handleUpdateFaves} />  
                </div>
                <p>{movie.overview}</p>
            </div>
        </div>
    )
};

export default OneMovie;