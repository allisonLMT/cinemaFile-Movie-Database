import React from 'react';
import DesktopNav from '../components/DesktopNav';
import MobileNav from '../components/MobileNav';
import styles from '../styles/pageNotFound.module.css';


function PageNotFound () {
    console.log("not found")
    return (
        <div>
            <DesktopNav />
                <div className='page'>
                    <h2 className={styles.notFound}>404 Error</h2>
                    <h3 className={styles.notFound}>Page not found.</h3>
                </div>
            <MobileNav />
        </div>
    )
};

export default PageNotFound;