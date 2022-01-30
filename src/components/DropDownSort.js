import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/dropDownSort.module.css';

function DropDownSort ( {sortState, handleSortState, reset} ) {

    const [isCollapsed, setIsCollapsed] = useState(true);
    

    var sortName = '';

    // used to set the text on the drownDownSort menu
    switch(sortState) {
        case 'search':
            sortName = '';
            break;
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

    // conditional render on NavLink {`${sortState} === 'popular' ? className=${styles.active} : className=${styles.inactive}`}
    // className = { sortState === 'popular' ? styles.active : styles.inactive }
    return (
        <div className={styles.sortButton}>
            { isCollapsed ? <p  className={styles.sortLabel}  onClick={() => { setIsCollapsed(!isCollapsed)} } >Or View By: {sortName} &#9660;</p> 
            : <p  className={styles.sortLabel} onClick={() => { setIsCollapsed(!isCollapsed)} } >Or View By: {sortName} &#9650;</p> }
        
        <nav className={isCollapsed ? styles.collapsed : styles.expanded}>
            <ul>
                <li>
                    <NavLink to='/sort/popular'
                    className = { sortState === 'popular' ? styles.active : styles.inactive }
                    onClick={() => { setIsCollapsed(!isCollapsed); reset(); handleSortState('popular') }} 
                    >Popular</NavLink>
                </li>
                <li>
                    <NavLink to='/sort/top-rated' 
                    className = { sortState === 'top_rated' ? styles.active : styles.inactive }
                    onClick={() => { setIsCollapsed(!isCollapsed); reset(); handleSortState('top_rated') }} >Top Rated</NavLink>
                </li>
                <li>
                    <NavLink to='/sort/now-playing' 
                    className = { sortState === 'now_playing' ? styles.active : styles.inactive }
                    onClick={() => { setIsCollapsed(!isCollapsed); reset(); handleSortState('now_playing') }} >Now Playing</NavLink>
                </li>
                <li>
                    <NavLink to='/sort/upcoming' 
                    className = { sortState === 'upcoming' ? styles.active : styles.inactive }
                    onClick={() => { setIsCollapsed(!isCollapsed); reset(); handleSortState('upcoming') }} >Upcoming</NavLink>
                </li>
            </ul>
        </nav>
        </div>
    )
};

export default DropDownSort;