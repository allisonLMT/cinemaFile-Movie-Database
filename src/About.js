import React from 'react';
import { useEffect } from 'react';
import Nav from './Navigation';

function About() {

    useEffect(() => {
        document.title = 'cinemaFile - About';
    }, []);

    return (
        <div>
            <Nav />
            <h1>About</h1>
        </div>
    );
}

export default About;