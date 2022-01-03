import React from 'react';
import { useEffect } from 'react';
import Nav from './Navigation';

function Home() {

    useEffect(() => {
        document.title = 'cinemaFile - Home';
    }, []);

    return (
        <div>
            <Nav />
            <h1>Home</h1>
        </div>
    );
};

export default Home;