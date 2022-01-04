import React from 'react';
import { useEffect } from 'react';


function Favorites() {
    
    useEffect(() => {
        document.title = 'cinemaFile - Favorites';
    }, []);

    return (
        <div className="page">
            <h1>Favorites</h1>
        </div>
    );
};

export default Favorites;