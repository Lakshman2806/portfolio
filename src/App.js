import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from 'react';
import Home from './pages/home';
import NavDock from './pageComponents/NavDock';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavDock />
        
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
