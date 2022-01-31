//Global Variables

//API Variables
//to build a file path for the image, it must have BASE_URL, FILE_SIZE, FILE_PATH
//the FILE_PATH comes from the movie data (key: poster_path)

export const API_KEY = '38a8b277f8affd24f0f983b1f396ef3b';
export const BASE_URL = 'https://image.tmdb.org/t/p/';

//image sizes ("/w500")
export const SM_POSTER_SIZE = 'w500';


//to build a path for a search SEARCH_URL + API_KEY + SEARCH_LANG + title + SEARCH_PAGE_ADULT
//will give results and then you'll need to know which one to display

export const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=';
export const SEARCH_LANG = '&language=en-US&query=';
export const SEARCH_PAGE_ADULT = '&page=1&include_adult=false';


// used to build IMDB path to actor profile
export const IMDB = 'https://imdb.com/name/';