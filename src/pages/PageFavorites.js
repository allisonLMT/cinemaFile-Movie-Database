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
        </div>
    );
};

export default PageFavorites;