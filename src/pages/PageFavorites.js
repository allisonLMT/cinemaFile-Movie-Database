import React from 'react';
import { useEffect, useState } from 'react';
import Movies from '../components/Movies.js';
import { getFavorites } from '../components/LocalStorageFavorites.js';


function PageFavorites() {
    
    useEffect(() => {
        document.title = 'cinemaFile - Favorites';
    }, []);

  
    var storedFaves = getFavorites();
   
   const [localFaves, setLocalFaves] = useState(storedFaves); 
   console.log(localFaves)

   function handleUpdateFaves(favesFromStorage){
       console.log('running')
        setLocalFaves(favesFromStorage);
    }


    return (
        <div className="page">
            <h2>Favorites</h2>
            {localFaves.length > 0 ? <Movies moviesData={localFaves} localFaves={localFaves} handleUpdateFaves={handleUpdateFaves}/> :
                <p>You don't have any favorites yet. Visit the homepage to add some. </p>}
        </div>
    );
};

export default PageFavorites;