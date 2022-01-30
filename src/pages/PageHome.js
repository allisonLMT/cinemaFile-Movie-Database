import React, { useEffect, useState } from 'react';
import DesktopNav from '../components/DesktopNav';
import MobileNav from '../components/MobileNav';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import DropDownSort from '../components/DropDownSort';
import Movies from '../components/Movies';
import styles from '../styles/pageHome.module.css'
import { API_KEY } from '../globals/variables.js';



function PageHome({ sort, currentPage, handleCurrentPage }) {

    window.scrollTo(0, 0);
    handleCurrentPage('home');
    
    useEffect(() => {
        document.title = 'cinemaFile - Home';
    }, []);
    
    // movie data for sort by list
    const [moviesData, setMovieData] = useState(null);
    // search term (sanitized version of input)
    const [searchTerm, setSearchTerm] = useState('');
    //input from search bar (displayed in bar)
    const [input, setInput] = useState('');
    //determines conditional rendering of "No Search Results Found" message
    const [noResults, setNoResults] = useState(false);
    //passed to DropDownSort and used for conditional rendering of sort buttons
    const [sortState, setSortState] = useState(sort);
 
    function reset() {
        setSortState('popular');
        setInput('');
        setSearchTerm('');
        setNoResults(false);
    };

    useEffect(() => {
        
        setNoResults(false);

        if (searchTerm !== '') {
            setSortState('search');
            //gets the data for the movies, based on the searchTerm (if there is one)
            const fetchSearchMovies = async () => {
                const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=1&include_adult=false`);
                const searchData = await res.json();
               
                //results in arrays of movie data
                const splicedSearchData = searchData.results.splice(0, 20);
                //console.log(splicedSearchData)
                setMovieData(splicedSearchData);
                //console.log(moviesData)
                if (splicedSearchData.length < 1) {
                    //console.log("no search results", noResults)
                    // set an error message
                    setNoResults(true);
                }
            }
            fetchSearchMovies();
           
        } else {
            setInput('')
            //if the search term was deleted, then the display goes back to the default ('popular')
            if (sortState === 'search' && searchTerm === '') {
                setSortState('popular');
                sort = 'popular';
            };
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

    function handleSortState(sort) {
        setSortState(sort);
    }

    return (
        <div className='page-container'>
            <DesktopNav reset={reset} origin="home" currentPage={currentPage} handleCurrentPage={handleCurrentPage} />
            <div className="content-wrap">
                <div className={styles.searchSortWrapper}>
                    <div className={styles.searchSort}>
                        <SearchBar handleSearchTerm={handleSearchTerm} input={input} handleSearchInput={handleSearchInput} />
                        <DropDownSort sortState={sortState} handleSortState={handleSortState} reset={reset}/>
                    </div>
                </div>
                {noResults === true && <p className={styles.noResults}>No search results found.</p>}
                
                <section className="movies">
                    {moviesData !== null ? <Movies moviesData={moviesData} /> :
                    <p className="message" >Fetching movies...</p>}
                </section>
            </div>
            <Footer />
            <MobileNav reset={reset} origin="home" />
        </div>
    );
};

export default PageHome;