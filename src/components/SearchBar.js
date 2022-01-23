import React from 'react';
import styles from '../styles/searchBar.module.css';



function SearchBar () {

    //const [searchData, setSearchData] = useState(null);

    // useEffect(() => {
    //     // searches the database based on the input of the search bar
    //     const fetchMovies = async () => {
    //         const res = await fetch(`https://api.themoviedb.org/3/movie/${sort}?api_key=${API_KEY}&language=en-US&page=1`);
    //         const searchData = await res.json();

    //         //results in arrays of movie data
    //         //const splicedSearchMovies = searchData.results.splice(0, 20);

    //         setSearchData(searchData);
    //     }
    //     fetchMovies();
    // }, [sort]);

    return (
        <div className={styles.search}>
            <input type="text" placeholder="Search by Movie Title" />
        </div>
    )
}

export default SearchBar;