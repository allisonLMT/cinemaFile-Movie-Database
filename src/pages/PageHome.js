import React, { useEffect, useState } from 'react';
import TopMovie from '../components/TopMovie';
import DropDownSort from '../components/DropDownSort';
import Movies from '../components/Movies';
import { API_KEY } from '../globals/variables.js';


function PageHome({ sort }) {

    useEffect(() => {
        document.title = 'cinemaFile - Home';
    }, []);

    const [topMovieData, setTopMovieData] = useState(null);
    const [moviesData, setMovieData] = useState(null);

    useEffect(() => {
        //gets the data for the first 13 movies, based on "popular"
        const fetchMovies = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${sort}?api_key=${API_KEY}&language=en-US&page=1`);
            const moviesData = await res.json();

            //results in arrays of movie data
            //splice alters the original array, once the first movie is removed the second splice needs to start at 0 again
            const topMovie = moviesData.results.splice(0,1);
            const next12Movies = moviesData.results.splice(0, 12);
           
            // console.log(topMovie)
            
            setTopMovieData(topMovie);
            setMovieData(next12Movies);
        }
        fetchMovies();
    }, [sort]);
    

    return (
        <div className="page">
            <section className="top-movie">
                {topMovieData !== null ? <TopMovie topMovieData={topMovieData} /> :
                <p>Fetching movies... </p>} 
            </section>
            
            <DropDownSort />
            <section className="movies">
                {moviesData !== null ? <Movies moviesData={moviesData} /> :
                <p>Fetching movies... </p>}
            </section>
        </div>
    );
};

export default PageHome;