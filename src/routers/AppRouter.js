import React from 'react';
import { Routes, Route } from "react-router-dom";
import DesktopNav from '../components/DesktopNav';
import MobileNav from '../components/MobileNav';
import PageHome from '../pages/PageHome';
import PageAbout from '../pages/PageAbout';
import PageFavorites from '../pages/PageFavorites';

function AppRouter() {
  return (
    <div className="App">
      <DesktopNav />
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="favorites" element={<PageFavorites />} />
        <Route path="about" element={<PageAbout />} />
        {/* add a Page Not Found here */}
      </Routes>
      <MobileNav />
    </div>
  );
}

export default AppRouter;
