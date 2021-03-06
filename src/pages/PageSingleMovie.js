import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL, API_KEY, SM_POSTER_SIZE } from '../globals/variables';
import DesktopNav from '../components/DesktopNav';
import MobileNav from '../components/MobileNav';
import Footer from '../components/Footer';
import styles from '../styles/pageSingleMovie.module.css';
import Heart from '../components/Heart';
import MovieRatingCircle from '../components/MovieRatingCircle';
import FullCast from '../components/FullCast';


function PageSingleMovie() {
    
    window.scrollTo(0, 0);

    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [castCrew, setCastCrew] = useState(null);

    useEffect(() => {
       
        const getMovie = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`);
            const movieDataFromAPI = await res.json();
            setMovie(movieDataFromAPI);
        }
        getMovie();

        const getCast = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`);
            const castCrewDataFromAPI = await res.json();
            setCastCrew(castCrewDataFromAPI);
        }
        getCast();
    }, []);

    useEffect(() => {
       if (movie !== null) {
           document.title = `cinemaFile - ${movie.title}`;
       }
    }, [movie])
   
    
    return (
        <div className='page-container'>
            <DesktopNav pageName='single'/>
                <div className = {`content-wrap ${styles.singleMovie}`}>
                    {movie !== null ?  
                        <div className={styles.movie}>
                            <div className={styles.singleMoviePoster}>
                                <img src={BASE_URL+SM_POSTER_SIZE+movie.poster_path} alt={movie.title}></img>
                                <MovieRatingCircle rating={movie.vote_average}/>
                            </div>
                            <div className={styles.singleMovieInfo}>
                                <h2>{movie.title}</h2>
                                <div className={styles.dateHeart}>
                                    <p className={styles.date}>{movie.release_date}</p>
                                    <Heart movie={movie} />
                                </div>
                                <h3>Overview:</h3>
                                <p className={styles.overview}>{movie.overview}</p>
                                <h3>Runtime: </h3><p>{movie.runtime} minutes</p>

                                <h3>Genres: </h3>
                                {movie.genres.map(genre => <p className={`${styles.inline} ${styles.genres}`} key={genre.id}>{genre.name}</p>)}
                            </div>
                        </div>
                    : <p>Fetching movie... </p>}
                    {castCrew !== null ?
                        <div className={styles.cast}>
                            <h3>Cast:</h3>
                            <FullCast castData={castCrew} />
                        </div>
                    : <p>Fetching cast...</p>}
                {/* end of content-wrap */}
                </div> 
            <Footer />
            <MobileNav pageName='single'/>
        </div>
        
    );
};

export default PageSingleMovie;