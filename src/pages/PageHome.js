import React from 'react';
import { useEffect, useState } from 'react';
import Movies from '../components/Movies.js';
import RatingCircle from '../components/MovieRatingCircle.js';
import LrgMoreInfo from '../components/LrgMoreInfo';
import { API_KEY } from '../globals/variables.js';


function Home() {

    useEffect(() => {
        document.title = 'cinemaFile - Home';
    }, []);

    const [moviesData, setMovieData] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
            const moviesData = await res.json();
            const first12Movies = moviesData.results.splice(0, 12);
            console.log(first12Movies); 
            setMovieData(first12Movies);
        }
        fetchMovies();
    }, [])

    return (
        <div className="page">
            <section className="top-movie">
                {/* need to add components for rating and more info */}
                {/* <img src="" alt="" /> */}
                <h3>Movie title</h3>
                <RatingCircle />
                <LrgMoreInfo />
            </section>
            <section>
                {moviesData !== null ? <Movies moviesData={moviesData} /> :
                <p>Fetching movies... </p>}
            </section>
            
        </div>
    );
};

export default Home;