
//import { Routes } from "react-router-dom";
import "./index.css"
import Navbar from './componet/Navbar'
import HeroSlider from "./componet/Heroimage";
import Menu from "./componet/MenuApi";

function App() {
  return (
    <div className="App">
    
      <Navbar/>
      <HeroSlider/>
       <Menu />

    </div>
  );
}

export default App;
