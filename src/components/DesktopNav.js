import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/desktopNav.module.css';
import logo from '../images/orange-cinemaFile.svg';
//import { getCurrentPage } from '../components/CurrentPage';



function DesktopNav ({ origin, reset, pageName }) {
    
    //className = {currentPage === 'home' ? styles.navLink styles.currentPage : styles.navLink styles.notCurrentPage }
    //className={`${styles.inline} ${styles.genres}`}

    //const current = getCurrentPage();
    console.log(pageName)

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
                        <NavLink to="/"  
                            className = {pageName === 'home' ? styles.currentPage : styles.notCurrentPage } 
                            onClick={() => { reset() }}
                            >Home</NavLink> :    
                        <NavLink to="/"  
                            className = {pageName === 'home' ? styles.currentPage : styles.notCurrentPage }  
                            >Home</NavLink>
                    }
                    <NavLink to="/favorites"   
                        className = {pageName === 'favorites' ? styles.currentPage : styles.notCurrentPage } 
                        >Favorites</NavLink>
                    <NavLink to="/about"  
                        className = {pageName === 'about' ? styles.currentPage : styles.notCurrentPage } 
                        >About</NavLink>
                </div>
        </nav>
        
    );
}

export default DesktopNav;