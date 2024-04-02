
//import { Routes } from "react-router-dom";
import "./index.css"
import Navbar from './componet/Navbar'
import HeroSlider from "./componet/Heroimage";
import MenuComponent from './componet/Menu';

function App() {
  return (
    <div className="App">
    
      <Navbar/>
      <HeroSlider/>
       <MenuComponent />

    </div>
  );
}

export default App;
