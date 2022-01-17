import React from 'react';
import styles from '../styles/heart.module.css';
import heartAdd from '../images/icons/heartAdd.svg';
// import heartFilled from '../images/icons/heartFilled';

// Heart favorite icon
// is shown as either heart+ or shaded in (toggle class? add to favorites)

function Heart({movie}) {

    // needs an event listener to toggle favorite
    //useState to manage if it's in favorites or not? What heart should it show?
    //if clicked, it needs to add the title to the local storage favorites list
    // before adding to the favorites, it must be stringified
  
    // onClick favMovies.push(movie)   push the movie into the array
   
   


    return (
        <div className={styles.heart}>
            {/* check if the movie is in favorites, if it is then display the filled heart, if not then heartAdd */}
            <img src={heartAdd} alt="" />
           
        </div>
    )
}

export default Heart;