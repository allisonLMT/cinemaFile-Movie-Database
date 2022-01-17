import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_KEY } from '../globals/variables';



function PageSingleMovie() {

    const { id } = useParams();
    const [movie, setMovie] = useState(null);


    useEffect(() => {
        

        const getMovie = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`);
            const movieDataFromAPI = res.json();
            setMovie(movieDataFromAPI);
        }
        getMovie();
    }, []);


    
    return (
        <div className = "page">
            {movie !== null && <h2>{movie.title}</h2>}
        </div>
        // build the rest of the single movie page here
    );
};

export default PageSingleMovie;