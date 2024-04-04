import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './  Routes/Navbar';
import HeroSlider from './Routes/Heroimage';
import MenuComponent from './Routes/Menu';
import SnacksPage from './Routes/SnacksPage';
import BreakfastPage from './Routes/BreakfastPage';
import DinnerPage from './Routes/DinnerPage';
import DessertPage from './Routes/DessertPage';
import LunchPage from './Routes/LunchPage';
import AppetizerPage from './Routes/AppetizerPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <HeroSlider />
        <Switch>
          <Route exact path="/" component={MenuComponent} />
          <Route path="/snacks" component={SnacksPage} />
          <Route path="/breakfast" component={BreakfastPage} />
          <Route path="/dinner" component={DinnerPage} />
          <Route path="/dessert" component={DessertPage} />
          <Route path="/lunch" component={LunchPage} />
          <Route path="/appetizer" component={AppetizerPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
