import React, { useEffect, useState } from 'react';
import Movies from '../components/Movies.js';
//import RatingCircle from '../components/MovieRatingCircle.js';
//import LrgMoreInfo from '../components/LrgMoreInfo';
import { API_KEY } from '../globals/variables.js';


function PageHome() {

    useEffect(() => {
        document.title = 'cinemaFile - Home';
    }, []);

    const [moviesData, setMovieData] = useState(null);

    useEffect(() => {
        //gets the data for the first 13 movies, based on "popular"
        const fetchMovies = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
            const moviesData = await res.json();

            const first13Movies = moviesData.results.splice(0, 13);
            //first13Movies is an array of objects containing movie data
            //console.log(first13Movies); 
            setMovieData(first13Movies);
            //console.log(first13Movies[0].original_title)
        }
        fetchMovies();
    }, [])
    

    return (
        <div className="page">
            <section className="top-movie">
                
            </section>
            <section className="movies">
                {moviesData !== null ? <Movies moviesData={moviesData} /> :
                <p>Fetching movies... </p>}
            </section>
            
        </div>
    );
};

export default PageHome;