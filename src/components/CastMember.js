import React, { useState, useEffect } from 'react';
import { BASE_URL, API_KEY, SM_POSTER_SIZE } from '../globals/variables';
import styles from '../styles/castMember.module.css';
import noImage from '../images/image-not-available.png';



function CastMember({ castMember }) {

    const [actor, setActor] = useState(null);

    useEffect (() => {
        const getActor = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/person/${castMember.id}?api_key=${API_KEY}&language=en-US`);
            const actorDataFromAPI = await res.json();
            setActor(actorDataFromAPI);
        }
        getActor();
    }, []);

    console.log(actor)
    return (
        <div className={styles.castMember}>
            {castMember.profile_path !== null ?
            <img src={BASE_URL+SM_POSTER_SIZE+castMember.profile_path} alt={castMember.name} />
            : <img src={noImage} alt="No Image Available" />
            }
            <p>"{castMember.character}"</p>
            <p>{castMember.name}</p>
        </div>
    )
}

export default CastMember;