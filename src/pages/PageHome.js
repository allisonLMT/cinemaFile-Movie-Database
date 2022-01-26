import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import DropDownSort from '../components/DropDownSort';
import Movies from '../components/Movies';
import styles from '../styles/pageHome.module.css'
import { API_KEY } from '../globals/variables.js';


function PageHome({ sort }) {

    useEffect(() => {
        document.title = 'cinemaFile - Home';
    }, []);

    const [moviesData, setMovieData] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [noResults, setNoResults] = useState(false);
    //input for search bar
    const [input, setInput] = useState('');

    console.log(moviesData)
    console.log(searchTerm)
    console.log(noResults)

    function reset() {
        setInput('')
        setSearchTerm('')
        setNoResults(false)
    };

    useEffect(() => {
        
        setNoResults(false);

        if (searchTerm !== '') {
            //gets the data for the movies, based on the searchTerm (if there is one)
            const fetchSearchMovies = async () => {
                const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=1&include_adult=false`);
                const searchData = await res.json();
               
                //results in arrays of movie data
                const splicedSearchData = searchData.results.splice(0, 20);
                console.log(splicedSearchData)
                setMovieData(splicedSearchData);
                console.log(moviesData)
                if (splicedSearchData.length < 1) {
                    console.log("no search results", noResults)
                    // set an error message here
                    setNoResults(true);
                }
            }
            fetchSearchMovies();
           
        } else {
            setInput('')
            //if there isn't, then it fetches based on the sort (default is "popular")
            const fetchMovies = async () => {
                const res = await fetch(`https://api.themoviedb.org/3/movie/${sort}?api_key=${API_KEY}&language=en-US&page=1`);
                const moviesData = await res.json();
    
                //results in arrays of movie data
                const splicedMovies = moviesData.results.splice(0, 12);
    
                setMovieData(splicedMovies);
            }
            fetchMovies();
        }
        
    }, [sort, searchTerm]);

    function handleSearchTerm(searchTerm) {
        setSearchTerm(searchTerm);
    };

    function handleSearchInput(input) {
        setInput(input);
    };

    return (
        <div className="page">
             
            <SearchBar handleSearchTerm={handleSearchTerm} input={input} handleSearchInput={handleSearchInput} />
            <DropDownSort sort={sort} reset={reset}/>
           
            {noResults === true && <p className={styles.noResults}>No search results found.</p>}
            
            <section className="movies">
                {moviesData !== null ? <Movies moviesData={moviesData} /> :
                <p className="message" >Fetching movies...</p>}
            </section>
        </div>
    );
};

export default PageHome;