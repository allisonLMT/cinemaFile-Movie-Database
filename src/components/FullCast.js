import React from 'react';
import CastMember from '../components/CastMember';
import styles from '../styles/fullCast.module.css';



function FullCast({ castData }) {

    return (
        <div className={styles.fullClass}>
            {castData.cast.map(castMember =>
                <CastMember castMember={castMember} key={castMember.id}/>
            )}
        </div>
    )
}

export default FullCast;