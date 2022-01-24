 //the array used to store the favorite movies before moving to local storage
 var favMovies = [];

 function indexInFavorites(movie) {
    //  //returns the index of the movie
    let favsFromStorage = localStorage.getItem('favMovies');

    if(favsFromStorage === null){
        return -1;
    }

    favsFromStorage = JSON.parse(favsFromStorage);
      
    function isMovieInFavs(obj) {
        return obj.id === movie.id;
    }
      
    const movieIndex = favsFromStorage.findIndex(isMovieInFavs);  
    
    return movieIndex;

};

function addFavorite (movie) {
    console.log("adding to favorites");

    var movieIndex = indexInFavorites(movie);
    
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
    console.log(JSON.parse(localStorage.getItem('favMovies')));
}


function removeFavorite (movie) {
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

function getFavorites() {
    console.log("getting favorites")
    var storedFaves = JSON.parse(localStorage.getItem('favMovies'));
    return storedFaves;
}

export { addFavorite, removeFavorite, getFavorites, indexInFavorites };