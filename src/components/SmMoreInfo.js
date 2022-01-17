import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/smMoreInfo.module.css';
import smMoreInfo from '../images/icons/smMoreInfo.svg';


function SmMoreInfo ( {movie}) {

    return (
        <div className={styles.smMoreInfo}>
            <Link to={`/movie/${movie.id}`}><img src={`${smMoreInfo}`} alt="" /></Link>
        </div>
    )
}

export default SmMoreInfo;