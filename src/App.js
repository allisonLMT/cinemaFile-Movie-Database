import { Routes, Route, Link } from "react-router-dom";
import './App.css';

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
