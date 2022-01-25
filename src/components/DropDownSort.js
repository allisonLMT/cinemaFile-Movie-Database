import React, { useState} from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/dropDownSort.module.css';

function DropDownSort ( {sort} ) {

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
            { isCollapsed ? <p  style={{color: '#FCA311'}}  onClick={() => { setIsCollapsed(!isCollapsed)} } >Sort By: {sortName} &#9660;</p> 
            : <p  style={{color: '#FCA311'}} onClick={() => { setIsCollapsed(!isCollapsed)} } >Sort By: {sortName} &#9650;</p> }
        
        <nav className={isCollapsed ? styles.collapsed : styles.expanded}>
            <ul>
                <li>
                    <NavLink to='/sort/popular' onClick={() => { setIsCollapsed(!isCollapsed)}} >Popular</NavLink>
                </li>
                <li>
                    <NavLink to='/sort/top-rated' onClick={() => { setIsCollapsed(!isCollapsed)}} >Top Rated</NavLink>
                </li>
                <li>
                    <NavLink to='/sort/now-playing' onClick={() => { setIsCollapsed(!isCollapsed)}} >Now Playing</NavLink>
                </li>
                <li>
                    <NavLink to='/sort/upcoming' onClick={() => { setIsCollapsed(!isCollapsed)}} >Upcoming</NavLink>
                </li>
            </ul>
        </nav>
        </div>
    )
};

export default DropDownSort;