import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/desktopNav.module.css';
import logo from '../images/orange-cinemaFile.svg';



function DesktopNav ({ origin, reset, currentPage, handleCurrentPage }) {
    
    return (
        <nav className={styles.desktopNav}>
                <NavLink to="/" className={styles.logoNavLink}>
                    {origin === "home" ?
                    <div className={styles.navLogos} onClick={() => { reset() }} >
                        <img src={logo} alt="" className={styles.logo}/>
                        <h1 className={styles.logoText}>cinemaFile</h1>
                    </div> :
                    <div className={styles.navLogos}>
                        <img src={logo} alt="" className={styles.logo}/>
                        <h1 className={styles.logoText}>cinemaFile</h1>
                    </div>
                    }
                </NavLink>
                <div className={styles.textNavMenu}>
                    { origin === "home" ?
                        <NavLink to="/"  className={styles.navLink} onClick={() => { reset() }}>Home</NavLink> :    
                        <NavLink to="/"  className={styles.navLink} >Home</NavLink>
                    }
                    <NavLink to="/favorites"  className={styles.navLink}>Favorites</NavLink>
                    <NavLink to="/about"  className={styles.navLink}>About</NavLink>
                </div>
        </nav>
        
    );
}

export default DesktopNav;