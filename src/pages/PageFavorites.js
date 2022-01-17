import React from 'react';
import { useEffect } from 'react';


function PageFavorites() {
    
    useEffect(() => {
        document.title = 'cinemaFile - Favorites';
    }, []);

    // var favMovies = [];
    // sort the movies in the faves by title
    // favMovies.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))

    // localStorage.setItem( 'favMovies' , JSON.stringify(favMovies) );
    // var storedFaves = JSON.parse(localStorage.getItem('favMovies'));


// if there are no favorites, display a message....otherwise show the favorites.
    return (
        <div className="page">
            <h1>Favorites</h1>
            {/* need to use a conditional similar to below to determine if there are favorites to show or not */}
            {/* {moviesData !== null ? <Movies moviesData={moviesData} /> :
                <p>You don't have any favorites yet. Visit the <link to home>homepage to add some. </p>} */}
        </div>
    );
};

export default PageFavorites;