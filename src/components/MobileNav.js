import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/mobileNav.module.css';

function mobileNav () {
    return (
        <nav className={styles.mobileNav}>
            <ul className={styles.navIcons}>
                
                <Link to="/" ><img src="/src/images/icons/homepage-blue.svg" alt="" className={styles.icon} /></Link>
                <Link to="Favorites" ><img src="/src/images/icons/heart-thin-blue.svg" alt="" className={styles.icon} /></Link>
                <Link to="About" ><img src="/images/icons/about-me-blue.svg" alt="" className={styles.icon} /></Link>
            </ul>
        </nav>
    );
};

export default mobileNav;