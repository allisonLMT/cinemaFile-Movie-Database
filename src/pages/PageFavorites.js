import React from 'react';
import { useEffect } from 'react';
import Movies from '../components/Movies.js';
import { getFavorites } from '../components/LocalStorageFavorites.js';


function PageFavorites() {
    
    useEffect(() => {
        document.title = 'cinemaFile - Favorites';
    }, []);

    var storedFaves = getFavorites();


// if there are no favorites, display a message....otherwise show the favorites.
    return (
        <div className="page">
            <h1>Favorites</h1>
            {/* need to use a conditional similar to below to determine if there are favorites to show or not */}
            {storedFaves !== null ? <Movies moviesData={storedFaves} /> :
                <p>You don't have any favorites yet. Visit the homepage to add some. </p>}
        </div>
    );
};

export default PageFavorites;