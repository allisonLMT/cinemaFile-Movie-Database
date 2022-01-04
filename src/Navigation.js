import React from 'react';
import { NavLink } from 'react-router-dom';


function Nav () {
    return (
        <nav>
            <ul>
                <li><NavLink to="/" exact className="nav-link">Home</NavLink></li>
                <li><NavLink to="/favorites" className="nav-link">Favorites</NavLink></li>
                <li><NavLink to="/about" className="nav-link">About</NavLink></li> 
            </ul>
        </nav>
    );
}

export default Nav;