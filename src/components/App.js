import React from "react";
import { Route,Routes } from "react-router-dom";
import BikePage from "./BikePage";
import Navbar from "./Navbar";
import Home from "./Home";
import YourBikeCollection from "./YourBikeCollection";

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/bikePage" element={<BikePage/>} />
      <Route path="/yourBikeCollection" element={<YourBikeCollection />} />
      </Routes>
    </div>
  );


}

export default App;
