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
   
    //all movies need to be checked to see if they are already in the favorites or not
    //that information will affect what heart is shown and if it is added to or removed from favorites

   
        // if (favMovies.includes(movie)) {
        //     includes
        // }
    

    //checkMovie(movie);

    function toggleFavorite() {
        console.log("toggling favorites");
        // if the movie is in the array, remove it and change to the heartAdd
        //if it is not in the array, add it and change to heartFilled
    };
   

    return (
        <div className={styles.heart}>
            {/* check if the movie is in favorites, if it is then display the filled heart, if not then heartAdd */}
            <img src={heartAdd} alt="" onClick={toggleFavorite}/>
            {/* {(favMovies.includes(movie) === true) ?  <img src={heartFilled} alt="" onClick={toggleFavorite}/> :
            <img src={heartAdd} alt="" onClick={toggleFavorite}/> } */}
        </div>
    )
}

export default Heart;