import React from 'react';
import { useEffect } from 'react';


function PageAbout() {

    useEffect(() => {
        document.title = 'cinemaFile - About';
    }, []);

    return (
        <div className="page">
            <h1>About</h1>
        </div>
    );
}

export default PageAbout;