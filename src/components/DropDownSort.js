import React, { useState} from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/dropDownSort.module.css';

function DropDownSort () {

    const [isCollapsed, setIsCollapsed] = useState(true);
    
    return (
        <div>
            { isCollapsed ? <p  style={{color: '#FCA311'}}  onClick={() => { setIsCollapsed(!isCollapsed)} } >Sort By: &#9660; </p> 
            : <p  style={{color: '#FCA311'}} onClick={() => { setIsCollapsed(!isCollapsed)} } >Sort By: &#9650; </p> }
        
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