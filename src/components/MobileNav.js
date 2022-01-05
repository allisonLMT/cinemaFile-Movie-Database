import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/mobileNav.module.css';
import home from '../images/icons/homepage-blue.svg';
import heart from '../images/icons/heart-thin-blue.svg';
import about from '../images/icons/about-me-blue.svg';

function mobileNav () {
    return (
        <nav className={styles.mobileNav}>
            <ul className={styles.navIcons}>
                <div className={styles.clickableArea}>
                    <Link to="/" ><img src={home} alt="" className={styles.icon} /></Link>
                </div>
                <div className={styles.clickableArea}>
                    <Link to="Favorites" ><img src={heart} alt="" className={styles.icon} /></Link>
                </div>
                <div className={styles.clickableArea}>
                    <Link to="About" ><img src={about} alt="" className={styles.icon} /></Link>
                </div>
            </ul>
        </nav>
    );
};

export default mobileNav;