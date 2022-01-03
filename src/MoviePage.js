import React from 'react';
import { useEffect } from 'react';
import Nav from './Navigation';

function MoviePage() {
    //need to change this so the title relects the movie title, same below with the H1
    useEffect(() => {
        document.title = 'cinemaFile - Home';
    }, []);

    // useParams() day 6 pg 22 and day 7?
    return (
        <div>
            <Nav />
            <h1>Movie</h1>
        </div>
    );
};

export default MoviePage;