import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles/desktopNav.module.css';


function Nav () {
    return (
        <nav>
            <ul>
                {/* should this whole div be a navLink to home? */}
                <div className={styles.navLogos}>
                    <img src="/images/orange-cinemaFile.svg" alt="" className={styles.logo}/>
                    <li className={styles.logoText}>cinemaFile</li>
                </div>
                <div className={styles.textNavMenu}>
                    <li><NavLink to="/" className={styles.navLink}>Home</NavLink></li>
                    <li><NavLink to="/favorites" className={styles.navLink}>Favorites</NavLink></li>
                    <li><NavLink to="/about" className={styles.navLink}>About</NavLink></li> 
                </div>
            </ul>
           
        </nav>
    );
}

export default Nav;