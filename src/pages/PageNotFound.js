import React from 'react';
import DesktopNav from '../components/DesktopNav';
import MobileNav from '../components/MobileNav';
import Footer from '../components/Footer';
import styles from '../styles/pageNotFound.module.css';


function PageNotFound () {
   
    return (
        <div className='page-container'>
            <DesktopNav />
                <div className='content-wrap'>
                    <h2 className={styles.notFound}>404 Error</h2>
                    <h3 className={styles.notFound}>Page not found.</h3>
                </div>
            <Footer />
            <MobileNav />
        </div>
    )
};

export default PageNotFound;