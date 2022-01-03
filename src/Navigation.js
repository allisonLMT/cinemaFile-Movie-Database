import React from 'react';
import { NavLink } from 'react-router-dom';


function Nav () {
    return (
        <nav>
            <ul>
                <li><NavLink to="/" exact>Home</NavLink></li>
                <li><NavLink to="/favorites">Favorites</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li> 
            </ul>
        </nav>
    );
}

export default Nav;