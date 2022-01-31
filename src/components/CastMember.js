import React, { useEffect, useState }from 'react';
import { BASE_URL, API_KEY, SM_POSTER_SIZE, IMDB } from '../globals/variables';
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

    return (
        <div className={styles.castMember}>
            { ( actor !== null && actor.imdb_id !== null ) ? 
                <a href={IMDB+actor.imdb_id} rel="noopener">
                    {castMember.profile_path !== null ?
                        <img src={BASE_URL+SM_POSTER_SIZE+castMember.profile_path} alt={castMember.name} />
                        : <img src={noImage} alt="Not Available" />
                    }
                    <p className={styles.character} >"{castMember.character}"</p>
                    <p className={styles.name} >{castMember.name}</p>
                </a>
            : 
                <div>
                    {castMember.profile_path !== null ?
                        <img src={BASE_URL+SM_POSTER_SIZE+castMember.profile_path} alt={castMember.name} />
                        : <img src={noImage} alt="Not Available" />
                    }
                    <p className={styles.character} >"{castMember.character}"</p>
                    <p className={styles.name} >{castMember.name}</p>
                </div>
            }
        </div>
    )
}

export default CastMember;