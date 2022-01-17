import React from 'react';
import { useEffect } from 'react';


function PageMovie() {
    //need to change this so the title relects the movie title, same below with the H1
    //probably need to add a variable to the array so that this runs each time the variable changes
    useEffect(() => {
        document.title = 'cinemaFile - Home';
    }, []);

    // useParams() day 6 pg 22 and day 7?
    return (
        <div className = "page">
            <h1>Movie</h1>
        </div>
    );
};

export default PageMovie;