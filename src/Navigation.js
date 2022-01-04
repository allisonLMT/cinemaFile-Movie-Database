import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles/nav.module.css';


function Nav () {
    return (
        <nav>
            <ul>
                <li><NavLink to="/" exact className={styles.navLink}>Home</NavLink></li>
                <li><NavLink to="/favorites" className={styles.navLink}>Favorites</NavLink></li>
                <li><NavLink to="/about" className={styles.navLink}>About</NavLink></li> 
            </ul>
        </nav>
    );
}

export default Nav;