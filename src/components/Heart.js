import React, { useState } from 'react';
import styles from '../styles/heart.module.css';
import heartAdd from '../images/icons/heartAdd.svg';
import heartFilled from '../images/icons/heartFilled.svg';
import { removeFavorite, addFavorite, indexInFavorites } from '../components/LocalStorageFavorites.js';


function Heart({movie, isTopMovie}) {

   //useState to manage which heart to display
   //indexInFavorites returns the index of the movie in the Favorites, if it exists
    const [favorite, setFavorite] = useState(indexInFavorites(movie));
    

    function toggleFavorite(isFav) {
        console.log("toggling favorites");
        //switch favorites to the opposite
        
        if (isFav) {
            removeFavorite(movie);
            setFavorite(-1);
        } else {
            setFavorite(true);
            addFavorite(movie);
        };
    };
      
    return (
       <div>
            {favorite === -1 ?
                <img src={heartAdd} alt="Add to Favs" className={isTopMovie ? styles.topMovieHeart : styles.heart} onClick={() => { toggleFavorite(false) } }/> :
                <img src={heartFilled} alt="Remove Favs" className={isTopMovie ? styles.topMovieHeart : styles.heart} onClick={() => {toggleFavorite(true) }}/>
            }
       </div>
    )
}

export default Heart;