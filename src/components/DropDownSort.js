import React, { useState} from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/dropDownSort.module.css';

function DropDownSort () {

    const [isCollapsed, setIsCollapsed] = useState(true);
    
    return (
        <div>
            { isCollapsed ? <p  style={{color: '#FCA311'}}  onClick={() => { setIsCollapsed(!isCollapsed) }} >Sort By: &#9660; </p> 
            : <p  style={{color: '#FCA311'}} onClick={() => { setIsCollapsed(!isCollapsed) }} >Sort By: &#9650; </p> }
        
        <nav className={isCollapsed ? styles.collapsed : styles.expanded}>
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
        </div>
    )
};

export default DropDownSort;