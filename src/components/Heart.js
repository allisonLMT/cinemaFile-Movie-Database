import React, { useState } from 'react';
import styles from '../styles/heart.module.css';
import heartAdd from '../images/icons/heartAdd.svg';
import heartFilled from '../images/icons/heartFilled.svg';
import { removeFavorite, addFavorite, indexInFavorites } from '../components/LocalStorageFavorites.js';
import { getFavorites } from '../components/LocalStorageFavorites.js';

function Heart({movie, handleUpdateFaves }) {

   //indexInFavorites returns the index of the movie in the Favorites, if it exists
    const [favorite, setFavorite] = useState(indexInFavorites(movie));

    function toggleFavorite(isFav, movie) {

        //switch favorites to the opposite
        if (isFav) { 
            removeFavorite(movie);
            setFavorite(-1);
            
        } else {
            setFavorite(true);
            addFavorite(movie);
        };

        if(handleUpdateFaves !== undefined){
            //sets state on the localFaves to the current value of the faves in local storage
            handleUpdateFaves(getFavorites());
        }
    };

    return (
       <div>
            {favorite === -1 ?
                <img src={heartAdd} alt="Add to Favs"  className={styles.heart} onClick={() => { toggleFavorite(false, movie) } }/> :
                <img src={heartFilled} alt="Remove Favs" className={styles.heart} onClick={() => {toggleFavorite(true, movie) }} />
            }
       </div>
    )
}

export default Heart;