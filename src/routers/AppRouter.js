import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PageHome from '../pages/PageHome';
import PageAbout from '../pages/PageAbout';
import PageFavorites from '../pages/PageFavorites';
import PageSingleMovie from '../pages/PageSingleMovie';
import PageNotFound from '../pages/PageNotFound';

function AppRouter() {

  return (
    <div className="App">
          <Routes>
            <Route path='/' exact element={<PageHome sort='popular'/>} />
            <Route path='/sort/popular' element={<PageHome sort='popular'/>} />
            <Route path='/sort/top-rated' element={<PageHome sort='top_rated'/>} />
            <Route path='/sort/now-playing' element={<PageHome sort='now_playing'/>} />
            <Route path='/sort/upcoming' element={<PageHome sort='upcoming'/>} />
            <Route path='/movie/:id' element={<PageSingleMovie />} />
            <Route path='favorites' element={<PageFavorites />} />
            <Route path='about' element={<PageAbout />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
    </div>
  );
}

export default AppRouter;
