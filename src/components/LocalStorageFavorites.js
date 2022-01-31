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

    var movieIndex = indexInFavorites(movie);
    
    //push the movie into the array of favorite movies, if it's not already there
    if (movieIndex === -1) {
        favMovies.push(movie);
    } 
    
    //stringify the array and add it to local storage
    localStorage.setItem( 'favMovies' , JSON.stringify(favMovies) );
}


function removeFavorite (movie) {

    // parse the localStorage of favMovies, then find the index of the movie within the array     
    // (or returns -1 if doesn't exist)
    var movieIndex = (JSON.parse(localStorage.getItem('favMovies'))).findIndex(object => {
        return object.id === movie.id;
    });
  
    // turns the localStorage back into an array before manipulating it
    var storedFaves = JSON.parse(localStorage.getItem('favMovies'));

    //then remove it from the local storage
    storedFaves.splice(movieIndex, 1);
    favMovies = storedFaves;
    
    //stringify the modified array, and put it back into local storage
    localStorage.setItem( 'favMovies' , JSON.stringify(favMovies) );

}

function getFavorites() {

    let storedFaves = localStorage.getItem('favMovies');

    if ( storedFaves === null ) {
        return [];
    } else {
        storedFaves = JSON.parse(storedFaves);
        return storedFaves;
    } 
}

export { addFavorite, removeFavorite, getFavorites, indexInFavorites };