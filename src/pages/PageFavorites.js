import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DesktopNav from '../components/DesktopNav';
import MobileNav from '../components/MobileNav';
import Movies from '../components/Movies.js';
import styles from '../styles/pageFavorites.module.css';
import { getFavorites } from '../components/LocalStorageFavorites.js';


function PageFavorites() {
    
    useEffect(() => {
        document.title = 'cinemaFile - Favorites';
    }, []);

  
    var storedFaves = getFavorites();
   
   const [localFaves, setLocalFaves] = useState(storedFaves); 
   console.log(localFaves)

   function handleUpdateFaves(favesFromStorage){
        setLocalFaves(favesFromStorage);
    }


    return (
        <div>
            <DesktopNav />
                <div className={styles.favorites}>
                    <h2>Favorites</h2>
                    {localFaves.length > 0 ? <Movies moviesData={localFaves} localFaves={localFaves} handleUpdateFaves={handleUpdateFaves}/> :
                        <p className={styles.none}>You don't have any favorites yet. Visit the <Link to="/sort/popular">homepage</Link> to add some. </p>}
                </div>
            <MobileNav />
        </div>
        
    );
};

export default PageFavorites;