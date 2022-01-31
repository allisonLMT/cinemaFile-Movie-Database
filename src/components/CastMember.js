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
    
    //console.log(actor)

    return (
        <div className={styles.castMember}>
            { ( actor !== null && actor.imdb_id !== null ) ? 
            console.log(actor.imdb_id) 
            // <a href={IMDB+actor.imdb_id}>imdb link</a>
            
            
            : 
            console.log('huh?')
            
            
            }

        
            {castMember.profile_path !== null ?
                <img src={BASE_URL+SM_POSTER_SIZE+castMember.profile_path} alt={castMember.name} />
                : <img src={noImage} alt="Not Available" />
            }
            <p>"{castMember.character}"</p>
            <p>{castMember.name}</p>
               
            {/* :
            <div>
                {castMember.profile_path !== null ?
                    <img src={BASE_URL+SM_POSTER_SIZE+castMember.profile_path} alt={castMember.name} />
                    : <img src={noImage} alt="Not Available" />
                    }
                    <p>"{castMember.character}"</p>
                    <p>{castMember.name}</p>
            </div>     */}
            
            
        </div>
    )
}

export default CastMember;