import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import DropDownSort from '../components/DropDownSort';
import Movies from '../components/Movies';
import { API_KEY } from '../globals/variables.js';


function PageHome({ sort }) {

    useEffect(() => {
        document.title = 'cinemaFile - Home';
    }, []);

    const [moviesData, setMovieData] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
   
    useEffect(() => {
        // if sort is used, then clear the searchTerm so sort will render
        setSearchTerm('');

        //gets the data for the movies, based on the filter
        const fetchMovies = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${sort}?api_key=${API_KEY}&language=en-US&page=1`);
            const moviesData = await res.json();

            //results in arrays of movie data
            const splicedMovies = moviesData.results.splice(0, 20);

            setMovieData(splicedMovies);
        }
        fetchMovies();
    }, [sort]);

    useEffect(() => {
        //gets the data for the movies, based on the searchTerm
        console.log(searchTerm)
        if (searchTerm !== '') {
            const fetchSearchMovies = async () => {
                const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=1&include_adult=false`);
                const searchData = await res.json();
                console.log("searchdata.results.length", searchData.results.length)
               
                console.log('searchData', searchData)
                //results in arrays of movie data
                const splicedSearchData = searchData.results.splice(0, 20);
                setMovieData(splicedSearchData);
             
            }
            fetchSearchMovies();
        }
        
    }, [searchTerm]);

    function handleSearchTerm(searchTerm) {
        console.log('updating searchTerm')
        setSearchTerm(searchTerm);
    };

    return (
        <div className="page">
            <SearchBar searchTerm={searchTerm} handleSearchTerm={handleSearchTerm} />
            <DropDownSort />
            {/* {searchTerm.length >= 0 && <p className="message">{searchTerm.length} search result(s)</p>} */}
            <section className="movies">
                {moviesData !== null ? <Movies moviesData={moviesData} /> :
                <p className="message" >Fetching movies...</p>}
            </section>
        </div>
    );
};

export default PageHome;