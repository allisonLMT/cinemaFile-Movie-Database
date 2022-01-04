import React from 'react';
import { useEffect } from 'react';


function Home() {

    useEffect(() => {
        document.title = 'cinemaFile - Home';
    }, []);

    return (
        <div className="page">
            <h1>Home</h1>
        </div>
    );
};

export default Home;