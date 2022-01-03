import React from 'react';
import { useEffect } from 'react';
import Nav from './Navigation';

function Favorites() {
    
    useEffect(() => {
        document.title = 'cinemaFile - Favorites';
    }, []);
    
    return (
        <div>
            <Nav />
            <h1>Favorites</h1>
        </div>
    );
};

export default Favorites;