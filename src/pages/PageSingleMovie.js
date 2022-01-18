import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL, API_KEY, SM_POSTER_SIZE } from '../globals/variables';
import styles from '../styles/PageSingleMovie.module.css';
import Heart from '../components/Heart';
import MovieRatingCircle from '../components/MovieRatingCircle';



function PageSingleMovie() {

    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        console.log(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`);
        const getMovie = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`);
            const movieDataFromAPI = await res.json();
            setMovie(movieDataFromAPI);
        }
        getMovie();
    }, []);


    
    return (
        <div className = {`page ${styles.singleMovie}`}>
            {/* conditional render of the movie info */}
            {movie !== null ?  
                <div className={styles.movie}>
                    <div>
                        <img src={BASE_URL+SM_POSTER_SIZE+movie.poster_path} alt={movie.title}></img>
                        <MovieRatingCircle rating={movie.vote_average}/>
                        <Heart movie={movie} className={styles.singleMovieHeart}/>
                    </div>
                    <div>
                        <h2>{movie.title}</h2>
                        <p>{movie.release_date}</p>
                        <p className={styles.overview}>{movie.overview}</p>
                        {/* genre? */}
                    </div>
                </div>
            : <p>Fetching movie... </p>}

        </div>
        // build the rest of the single movie page here
    );
};

export default PageSingleMovie;