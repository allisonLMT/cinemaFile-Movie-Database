import React from 'react';
import styles from '../styles/overviewOverlay.module.css';
import Heart from '../components/Heart';


function OverviewOverlay ({movie}) {
    return (
        <div className={styles.overview}>
            <p>{movie.overview}</p>
            {/* need to pass Heart the movie ID(?) to be able to favorite it */}
            <Heart />
        </div>
    )


}

export default OverviewOverlay;