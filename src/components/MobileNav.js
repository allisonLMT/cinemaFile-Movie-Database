import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/mobileNav.module.css';
import home from '../images/icons/homepage-blue.svg';
import heart from '../images/icons/heart-thin-blue.svg';
import about from '../images/icons/about-me-blue.svg';



function MobileNav ({ origin, reset }) {
    
    return (
        <nav className={styles.mobileNav}>
            <NavLink to="/" className={styles.link}>
                {origin === "home" ?
                    <div className={styles.clickableArea} onClick={() => { reset() }} > 
                         <img src={home} alt="" className={styles.icon} />
                    </div> :
                    <div className={styles.clickableArea} > 
                        <img src={home} alt="" className={styles.icon} />
                    </div>
                }    
            </NavLink>
            <NavLink to="/favorites" className={styles.link}>
                <div className={styles.clickableArea}>
                    <img src={heart} alt="" className={styles.icon} />
                </div>
            </NavLink>
            <NavLink to="/about" className={styles.link}>
                <div className={styles.clickableArea}>
                    <img src={about} alt="" className={styles.icon} />
                </div>
            </NavLink>
        </nav>
    );
};

export default MobileNav;