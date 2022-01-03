import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home.js';
import About from './components/pages/About';
import Game from './components/pages/Game';
import Download from './components/pages/Download';



function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' exact element= {<Home/>}/>
        <Route path='/about' exact element={<About/>}/>
        <Route path='/game' exact element={<Game/>}/>
        <Route path='/download' exact element={<Download/>}/>
          
      </Routes>
    </Router>
    </>
  );
}

export default App;
