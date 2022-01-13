import React from 'react';
import styles from '../styles/OverviewOverlay';


function OverviewOverlay () {
    return (
        <div className={styles.overview}>
            <p>{movie.overview}</p>
            {/* need to pass Heart the movie ID to be able to favorite it */}
            <Heart />
        </div>
    )


}

export default OverviewOverlay;