import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import Favorites from './Favorites';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
