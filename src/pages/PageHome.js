import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import DropDownSort from '../components/DropDownSort';
import Movies from '../components/Movies';
import { API_KEY } from '../globals/variables.js';


function PageHome({ sort }) {

    useEffect(() => {
        document.title = 'cinemaFile - Home';
    }, []);

    const [moviesData, setMovieData] = useState(null);

    useEffect(() => {
        //gets the data for the movies, based on "popular" filter
        const fetchMovies = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${sort}?api_key=${API_KEY}&language=en-US&page=1`);
            const moviesData = await res.json();

            //results in arrays of movie data
            const splicedMovies = moviesData.results.splice(0, 20);

            setMovieData(splicedMovies);
        }
        fetchMovies();
    }, [sort]);

  

    return (
        <div className="page">
            <SearchBar />
            <DropDownSort />
            <section className="movies">
                {moviesData !== null ? <Movies moviesData={moviesData} /> :
                <p>Fetching movies... </p>}
            </section>
        </div>
    );
};

export default PageHome;