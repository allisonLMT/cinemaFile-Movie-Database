import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/desktopNav.module.css';
import logo from '../images/orange-cinemaFile.svg';



function DesktopNav ({ reset }) {
    return (
        <nav className={styles.desktopNav}>
                <NavLink to="/" className={styles.logoNavLink}>
                    <div className={styles.navLogos}>
                        <img src={logo} alt="" className={styles.logo}/>
                        <h1 className={styles.logoText}>cinemaFile</h1>
                    </div>
                </NavLink>
                <div className={styles.textNavMenu}>
                    <NavLink to="/"  className={styles.navLink} onClick={() => { reset() }}>Home</NavLink>
                    <NavLink to="/favorites"  className={styles.navLink}>Favorites</NavLink>
                    <NavLink to="/about"  className={styles.navLink}>About</NavLink>
                </div>
        </nav>
        
    );
}

export default DesktopNav;