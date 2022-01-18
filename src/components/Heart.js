import React, { useState }  from 'react';
import styles from '../styles/heart.module.css';
import heartAdd from '../images/icons/heartAdd.svg';
import heartFilled from '../images/icons/heartFilled.svg';

// Heart favorite icon
// is shown as either heart+ or shaded in (toggle class? add to favorites)

 //the array used to store the favorite movies before moving to local storage
 var favMovies = [];


function Heart({movie}) {

   //useState to manage if a movie is favorited or not
   //can this have an unique id added so that it persists with each movie?
    const [favorite, setFavorite] = useState(false);
   

    function toggleFavorite() {
        console.log("toggling favorites");
    
        if (favorite === true) {
            setFavorite(false);
            removeFavorite();
        } else {
            setFavorite(true);
            addFavorite();
        }
    };

    function addFavorite () {
        console.log("adding to favorites");
        //console.log(movie)
        
        // parse the localStorage of favMovies, then find the index of the movie within the array     
        // (or returns -1 if doesn't exist)
        var movieIndex = (JSON.parse(localStorage.getItem('favMovies'))).findIndex(object => {
            return object.id === movie.id;
        });

        console.log(movieIndex)
        
        //push the movie into the array of favorite movies, if it's not already there
        if (movieIndex === -1) {
            favMovies.push(movie);
            console.log('movie added')
            //console.log(favMovies)
        } else {
            console.log("already in faves")
        }
        
        //stringify the array and add it to local storage
        localStorage.setItem( 'favMovies' , JSON.stringify(favMovies) );
        console.log(JSON.parse(localStorage.getItem('favMovies')))
    }


    function removeFavorite () {
        console.log("removing from favorites")

        // parse the localStorage of favMovies, then find the index of the movie within the array     
        // (or returns -1 if doesn't exist)
        var movieIndex = (JSON.parse(localStorage.getItem('favMovies'))).findIndex(object => {
            return object.id === movie.id;
        });
        console.log("movie index="+movieIndex)
        // turns the localStorage back into an array before manipulating it
        var storedFaves = JSON.parse(localStorage.getItem('favMovies'));
        console.log(JSON.parse(localStorage.getItem('favMovies')))

        //then remove it from the local storage
        storedFaves.splice(movieIndex, 1);
        favMovies = storedFaves;
        
        //stringify the modified array, and put it back into local storage
        localStorage.setItem( 'favMovies' , JSON.stringify(favMovies) );
        console.log(JSON.parse(localStorage.getItem('favMovies')))
    
    }
   

    return (
        <div className={styles.heart}>
            {/* check if the movie is in favorites, if it is then display the filled heart, if not then heartAdd */}
            {favorite === false ?
                <img src={heartAdd} alt="" onClick={toggleFavorite}/> :
                <img src={heartFilled} alt="" onClick={toggleFavorite}/>
            }
        </div>
    )
}

export default Heart;