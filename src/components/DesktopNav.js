import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles/desktopNav.module.css';


function desktopNav () {
    return (
        <nav className={styles.desktopNav}>
            <ul>
                {/* should this whole div be a Link to home? */}
                <div className={styles.navLogos}>
                    <img src="/images/orange-cinemaFile.svg" alt="" className={styles.logo}/>
                    <li className={styles.logoText}>cinemaFile</li>
                </div>
                <div className={styles.textNavMenu}>
                    <li><NavLink to="/" activestyle={{textDecoration: "underline"}} className={styles.navLink}>Home</NavLink></li>
                    <li><NavLink to="/favorites" activestyle={{textDecoration: "underline"}} className={styles.navLink}>Favorites</NavLink></li>
                    <li><NavLink to="/about" activestyle={{textDecoration: "underline"}} className={styles.navLink}>About</NavLink></li> 
                </div>
            </ul>
        </nav>
    );
}

export default desktopNav;