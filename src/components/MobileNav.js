import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/mobileNav.module.css';
import home from '../images/icons/homepage-blue.svg';
import heart from '../images/icons/heart-thin-blue.svg';
import about from '../images/icons/about-me-blue.svg';

function mobileNav () {
    return (
        <nav className={styles.mobileNav}>
            <Link to="/" className={styles.test}>
                <div className={styles.clickableArea}>
                    <img src={home} alt="" className={styles.icon} />
                </div>
            </Link>
            <Link to="Favorites" className={styles.test}>
                <div className={styles.clickableArea}>
                    <img src={heart} alt="" className={styles.icon} />
                </div>
            </Link>
            <Link to="About" className={styles.test}>
                <div className={styles.clickableArea}>
                    <img src={about} alt="" className={styles.icon} />
                </div>
            </Link>
        </nav>
    );
};

export default mobileNav;