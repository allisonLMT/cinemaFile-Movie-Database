import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/mobileNav.module.css';
import home from '../images/icons/homepage-blue.svg';
import heart from '../images/icons/heart-thin-blue.svg';
import about from '../images/icons/about-me-blue.svg';



function MobileNav ({ pageName, reset }) {
    
    return (
        <nav className={styles.mobileNav}>
            <NavLink to="/" className={styles.link}>
                {pageName === "home" ?
                    <div className={styles.clickableArea} onClick={() => { reset() }} > 
                        <div className = {pageName === 'home' ? styles.currentPage : styles.notCurrentPage}>
                            <img src={home} alt="" className={styles.icon} />
                        </div>
                    </div> :
                    <div className={styles.clickableArea} > 
                        <div className = {pageName === 'home' ? styles.currentPage : styles.notCurrentPage}>    
                            <img src={home} alt="" className={styles.icon} />
                        </div>
                    </div>
                }    
            </NavLink>
            <NavLink to="/favorites" className={styles.link}>
                <div className={styles.clickableArea}>
                    <div className = {pageName === 'favorites' ? styles.currentPage : styles.notCurrentPage}>
                        <img src={heart} alt="" className={styles.icon} />
                    </div>
                </div>
            </NavLink>
            <NavLink to="/about" className={styles.link}>
                <div className={styles.clickableArea}>
                    <div className = {pageName === 'about' ? styles.currentPage : styles.notCurrentPage}>
                        <img src={about} alt="" className={styles.icon} />
                    </div>
                </div>
            </NavLink>
        </nav>
    );
};

export default MobileNav;