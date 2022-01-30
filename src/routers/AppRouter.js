import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import PageHome from '../pages/PageHome';
import PageAbout from '../pages/PageAbout';
import PageFavorites from '../pages/PageFavorites';
import PageSingleMovie from '../pages/PageSingleMovie';
import PageNotFound from '../pages/PageNotFound';

function AppRouter() {

  const [ currentPage, setCurrentPage] = useState('');

  function handleCurrentPage(pageType) {
    setCurrentPage(pageType);
  };

 

  return (
    <div className="App">
          <Routes>
            <Route path='/' exact element={<PageHome sort='popular'currentPage={currentPage} handleCurrentPage={handleCurrentPage}/>} />
            <Route path='/sort/popular' element={<PageHome sort='popular'currentPage={currentPage} handleCurrentPage={handleCurrentPage}/>} />
            <Route path='/sort/top-rated' element={<PageHome sort='top_rated'currentPage={currentPage} handleCurrentPage={handleCurrentPage}/>} />
            <Route path='/sort/now-playing' element={<PageHome sort='now_playing'currentPage={currentPage} handleCurrentPage={handleCurrentPage}/>} />
            <Route path='/sort/upcoming' element={<PageHome sort='upcoming'/>} currentPage={currentPage} handleCurrentPage={handleCurrentPage} />
            <Route path='/movie/:id' element={<PageSingleMovie />} currentPage={currentPage} handleCurrentPage={handleCurrentPage} />
            <Route path='favorites' element={<PageFavorites />} currentPage={currentPage} handleCurrentPage={handleCurrentPage} />
            <Route path='about' element={<PageAbout />} currentPage={currentPage} handleCurrentPage={handleCurrentPage} />
            <Route path='*' element={<PageNotFound />} currentPage={currentPage} handleCurrentPage={handleCurrentPage} />
          </Routes>
    </div>
  );
}

export default AppRouter;
