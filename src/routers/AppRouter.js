import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import PageHome from '../pages/PageHome';
import PageAbout from '../pages/PageAbout';
import PageFavorites from '../pages/PageFavorites';
import PageSingleMovie from '../pages/PageSingleMovie';
import PageNotFound from '../pages/PageNotFound';

function AppRouter() {

  const [ isCurrentPage, setIsCurrentPage] = useState('');

  function handleCurrentPage(pageType) {
    setIsCurrentPage(pageType);
  };

 

  return (
    <div className="App">
          <Routes>
            <Route path='/' exact element={<PageHome sort='popular'isCurrentPage={isCurrentPage} handleCurrentPage={handleCurrentPage}/>} />
            <Route path='/sort/popular' element={<PageHome sort='popular'isCurrentPage={isCurrentPage} handleCurrentPage={handleCurrentPage}/>} />
            <Route path='/sort/top-rated' element={<PageHome sort='top_rated'isCurrentPage={isCurrentPage} handleCurrentPage={handleCurrentPage}/>} />
            <Route path='/sort/now-playing' element={<PageHome sort='now_playing'isCurrentPage={isCurrentPage} handleCurrentPage={handleCurrentPage}/>} />
            <Route path='/sort/upcoming' element={<PageHome sort='upcoming'/>} isCurrentPage={isCurrentPage} handleCurrentPage={handleCurrentPage} />
            <Route path='/movie/:id' element={<PageSingleMovie />} isCurrentPage={isCurrentPage} handleCurrentPage={handleCurrentPage} />
            <Route path='favorites' element={<PageFavorites />} isCurrentPage={isCurrentPage} handleCurrentPage={handleCurrentPage} />
            <Route path='about' element={<PageAbout />} isCurrentPage={isCurrentPage} handleCurrentPage={handleCurrentPage} />
            <Route path='*' element={<PageNotFound />} isCurrentPage={isCurrentPage} handleCurrentPage={handleCurrentPage} />
          </Routes>
    </div>
  );
}

export default AppRouter;
