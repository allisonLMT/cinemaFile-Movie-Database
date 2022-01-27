import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL, API_KEY, SM_POSTER_SIZE } from '../globals/variables';
import DesktopNav from '../components/DesktopNav';
import MobileNav from '../components/MobileNav';
import styles from '../styles/pageSingleMovie.module.css';
import Heart from '../components/Heart';
import MovieRatingCircle from '../components/MovieRatingCircle';



function PageSingleMovie() {

    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
       
        const getMovie = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`);
            const movieDataFromAPI = await res.json();
            setMovie(movieDataFromAPI);
        }
        getMovie();
    }, []);

    useEffect(() => {
       if (movie !== null) {
           document.title = `cinemaFile - ${movie.title}`;
       }
    }, [movie])
   
    
    return (
        <div>
            <DesktopNav />
                <div className = {`page ${styles.singleMovie}`}>
                    {/* conditional render of the movie info */}
                    {movie !== null ?  
                        <div className={styles.movie}>
                            <div className={styles.singleMoviePoster}>
                                <img src={BASE_URL+SM_POSTER_SIZE+movie.poster_path} alt={movie.title}></img>
                                <MovieRatingCircle rating={movie.vote_average}/>
                            </div>
                            <div className={styles.singleMovieInfo}>
                                <h2>{movie.title}</h2>
                                
                                <p className={styles.date}>{movie.release_date}</p>
                                <Heart movie={movie} />
                                <p className={styles.overview}>{movie.overview}</p>
                                {/* genre? */}
                            </div>
                        </div>
                    : <p>Fetching movie... </p>}
                </div>
            <MobileNav />
        </div>
        
    );
};

export default PageSingleMovie;