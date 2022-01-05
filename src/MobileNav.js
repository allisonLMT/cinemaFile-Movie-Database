import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/mobileNav.module.css';

function mobileNav () {
    return (
        <nav className={styles.mobileNav}>
            <ul className={styles.navIcons}>
                <img src="" alt="" />
                <Link to="/" className={styles.icon}>Home</Link>
                <Link to="Favorites" className={styles.icon}>Favorites</Link>
                <Link to="About" className={styles.icon}>About</Link>
            </ul>
        </nav>
    );
};

export default mobileNav;