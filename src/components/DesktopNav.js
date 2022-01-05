import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/desktopNav.module.css';
import logo from '../images/orange-cinemaFile.svg';



function desktopNav () {
    return (
        <nav className={styles.desktopNav}>
                {/* should this whole div be a Link to home? */}
                <div className={styles.navLogos}>
                    <img src={logo} alt="" className={styles.logo}/>
                    <h1 className={styles.logoText}>cinemaFile</h1>
                </div>
                <div className={styles.textNavMenu}>
                    <NavLink to="/" activestyle={{textDecoration: "underline"}} className={styles.navLink}>Home</NavLink>
                    <NavLink to="/favorites" activestyle={{textDecoration: "underline"}} className={styles.navLink}>Favorites</NavLink>
                    <NavLink to="/about" activestyle={{textDecoration: "underline"}} className={styles.navLink}>About</NavLink>
                </div>
        </nav>
    );
}

export default desktopNav;