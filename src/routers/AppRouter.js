import React from 'react';
import { Routes, Route } from "react-router-dom";
import DesktopNav from '../components/DesktopNav';
import MobileNav from '../components/MobileNav';
import Home from '../pages/PageHome';
import About from '../pages/PageAbout';
import Favorites from '../pages/PageFavorites';

function AppRouter() {
  return (
    <div className="App">
      <DesktopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="about" element={<About />} />
        {/* add a Page Not Found here */}
      </Routes>
      <MobileNav />
    </div>
  );
}

export default AppRouter;
