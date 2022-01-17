import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/dropDownSort.module.css';

function DropDownSort () {


    return (
        <nav className={styles.sort}>
            <ul>
                <li>
                    <NavLink to='/sort/popular'>Popular</NavLink>
                </li>
                <li>
                    <NavLink to='/sort/top-rated'>Top Rated</NavLink>
                </li>
                <li>
                    <NavLink to='/sort/now-playing'>Now Playing</NavLink>
                </li>
                <li>
                    <NavLink to='/sort/upcoming'>Upcoming</NavLink>
                </li>
            </ul>
        </nav>
    )
};

export default DropDownSort;