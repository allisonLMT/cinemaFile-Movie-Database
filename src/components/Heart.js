import React, { useState, useEffect } from 'react';
import styles from '../styles/heart.module.css';
import heartAdd from '../images/icons/heartAdd.svg';
import heartFilled from '../images/icons/heartFilled.svg';
import { removeFavorite, addFavorite, indexInFavorites } from '../components/LocalStorageFavorites.js';


function Heart({movie}) {

   //useState to manage which heart to display
    const [favorite, setFavorite] = useState(false);

    useEffect(() => {
        //find out the index, then use that to setFavorites to true or false
        var indexInFaves = indexInFavorites(movie);
        if (indexInFaves === -1) {
            setFavorite(false);
        } else {
            setFavorite(true);
        };

    }, []);
    

    function toggleFavorite(isFav) {
        console.log("toggling favorites");
        //switch favorites to the opposite
        setFavorite(!isFav);

        if (isFav) {
            removeFavorite(movie);
        } else {
            addFavorite(movie);
        };
    };
      

    return (
        <div className={styles.heart}>
            {favorite === false ?
                <img src={heartAdd} alt="" onClick={() => { toggleFavorite(false) } }/> :
                <img src={heartFilled} alt="" onClick={() => {toggleFavorite(true) }}/>
            }
        </div>
    )
}

export default Heart;