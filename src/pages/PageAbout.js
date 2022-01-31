import React, { useEffect } from 'react';
import DesktopNav from '../components/DesktopNav';
import MobileNav from '../components/MobileNav';
import Footer from '../components/Footer';
import styles from '../styles/pageAbout.module.css';
import logo from '../images/orange-cinemaFile.svg';
import tmdbLogo from '../images/the-movie-database.svg';



function PageAbout() {
    
    window.scrollTo(0, 0)
    
    useEffect(() => {
        document.title = 'cinemaFile - About';
    }, []);

    return (
        <div className='page-container'>
            <DesktopNav pageName='about' />
                <div className='content-wrap'>
                    <section className={styles.cinemaFile}>
                        <img src={logo} alt="cinemaFile logo" />
                        <div>
                            <h2>About cinemaFile</h2>
                            <p>cinemaFile is a movie database site created by Allison Tredwell. It was built using React js and The Movie Database API.</p>
                        </div>
                    </section>
                    <section className={styles.TMDB}>
                        
                            <img src={tmdbLogo} alt="TMDb logo" />
                            <div>
                            <a href="https://www.themoviedb.org/"><h2>The Movie Database API</h2></a>
                                <p>TMDb is a community built TV and movie database. It began in 2008, and has an international focus, with support in 39 languages. The API allows external applications to access the database information. This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
                            </div>
                        
                    </section>
                </div>
                <Footer />
            <MobileNav pageName='about' />
        </div>
    );
}

export default PageAbout;