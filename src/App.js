import React from 'react';
import { Routes, Route } from "react-router-dom";
import Navigation from './Navigation';
import Home from './Home';
import About from './About';
import Favorites from './Favorites';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="about" element={<About />} />
        {/* add a Page Not Found here */}
      </Routes>
    </div>
  );
}

export default App;
