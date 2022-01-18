import React from 'react';
import { useEffect } from 'react';


function PageFavorites() {
    
    useEffect(() => {
        document.title = 'cinemaFile - Favorites';
    }, []);

    


// if there are no favorites, display a message....otherwise show the favorites.
    return (
        <div className="page">
            <h1>Favorites</h1>
            {/* need to use a conditional similar to below to determine if there are favorites to show or not */}
            {/* {favorites !== null ? <Movies moviesData={favorites} /> :
                <p>You don't have any favorites yet. Visit the <link to home>homepage to add some. </p>} */}
        </div>
    );
};

export default PageFavorites;