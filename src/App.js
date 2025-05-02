import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Component/Header/Header";
import ProductOne from "./Component/KMnO4/ProductOne";
import ProductTwo from "./Component/KJ/ProductTwo";
import Video from "./Component/Video/Video";
import Experiment from "./Component/Experiment/Experiment";
// import kmn04Image from './images/kmn04.jpg';  // KMnO4 Image
// import kiImage from './images/ki.jpg';        // KI Image

function App() {
  return (
    <div className="App">
      <header >
   
        <div className="container">
          <h1></h1>
          <p>Բարի գալուստ մեր կայք։</p>
        </div>

      </header>
      <Router>
      <Routes>
        <Route path="/" element={<Header />} />
      <Route path="/productone" element={<ProductOne/>}/>
      <Route path="/producttwo" element={<ProductTwo/>}/>
      <Route path="/video" element={<Video/>}/>
      <Route path="/experiment" element={<Experiment/>}/>
      </Routes>
    </Router>

      <footer>
        <div className="container">
          <p>&copy; 2025 Աղերի դերը մարդու կյանքում</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
