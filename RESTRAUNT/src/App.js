import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './component/Navbar';
import HeroSlider from './component/Heroimage';
import MenuComponent from './component/Menu';

import SnacksPage from './Routes/SnackPage';
import BreakfastPage from './Routes/BreakfastPage';
import DinnerPage from './Routes/DinnerPage';

import LunchPage from './Routes/LunchPage';
import AppetizerPage from './Routes/AppetizerPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <HeroSlider />
        <Routes>
          <Route exact path="/" element={<MenuComponent />} />
          <Route path="/snacks" element={<SnacksPage />} />
          <Route path="/breakfast" element={<BreakfastPage />} />
          <Route path="/dinner" element={<DinnerPage />} />
          <Route path="/lunch" element={<LunchPage />} />
          <Route path="/appetizer" element={<AppetizerPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
