import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles/nav.module.css';


function Nav () {
    return (
        <nav>
            <ul>
                <li><img src="./images/orange-cinemaFile.svg" alt="" className={styles.logo}/></li>
                <li className={styles.logoText}>cinemaFile</li>
                <li><NavLink to="/" className={styles.navLink}>Home</NavLink></li>
                <li><NavLink to="/favorites" className={styles.navLink}>Favorites</NavLink></li>
                <li><NavLink to="/about" className={styles.navLink}>About</NavLink></li> 
            </ul>
            {/* <button>BTN</button> */}
            {/* button will be the hamburger, later...display block/none  */}
        </nav>
    );
}

export default Nav;