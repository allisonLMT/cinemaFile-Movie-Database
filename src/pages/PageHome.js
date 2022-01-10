import React from 'react';
import { useEffect } from 'react';


function Home() {

    useEffect(() => {
        document.title = 'cinemaFile - Home';
    }, []);

    return (
        <div className="page">
            <div className="top-movie">
                {/* need to add components for rating and more info */}
                {/* <img src="" alt="" /> */}
                <h3>Movie title</h3>
            </div>
        </div>
    );
};

export default Home;