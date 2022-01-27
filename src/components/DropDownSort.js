import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/dropDownSort.module.css';

function DropDownSort ( {sort, reset} ) {

    const [isCollapsed, setIsCollapsed] = useState(true);
    

    var sortName = '';

    switch(sort) {
        case 'top_rated':
            sortName = 'Top Rated';
            break;
        case 'now_playing':
            sortName = 'Now Playing';
            break;
        case 'upcoming':
            sortName = 'Upcoming';
            break;
        default:
            sortName = 'Popular';
    }

    return (
        <div className={styles.sortButton}>
            { isCollapsed ? <p  className={styles.sortLabel}  onClick={() => { setIsCollapsed(!isCollapsed)} } >Or View By: {sortName} &#9660;</p> 
            : <p  className={styles.sortLabel} onClick={() => { setIsCollapsed(!isCollapsed)} } >Or View By: {sortName} &#9650;</p> }
        
        <nav className={isCollapsed ? styles.collapsed : styles.expanded}>
            <ul>
                <li>
                    <NavLink to='/sort/popular' onClick={() => { setIsCollapsed(!isCollapsed); reset() }} >Popular</NavLink>
                </li>
                <li>
                    <NavLink to='/sort/top-rated' onClick={() => { setIsCollapsed(!isCollapsed); reset() }} >Top Rated</NavLink>
                </li>
                <li>
                    <NavLink to='/sort/now-playing' onClick={() => { setIsCollapsed(!isCollapsed); reset() }} >Now Playing</NavLink>
                </li>
                <li>
                    <NavLink to='/sort/upcoming' onClick={() => { setIsCollapsed(!isCollapsed); reset() }} >Upcoming</NavLink>
                </li>
            </ul>
        </nav>
        </div>
    )
};

export default DropDownSort;