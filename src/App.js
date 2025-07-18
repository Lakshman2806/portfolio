import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from 'react';
import Home from './pages/home';
import NavDock from './pageComponents/NavDock';
import Education from './pages/education';
import Projects from './pages/projects';
import ContactMe from './pages/contactMe';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavDock />

        <Routes>
          <Route path="/portfolio" element={<Home />} />
          <Route path="/portfolio/education" element={<Education />} />
          <Route path="/portfolio/projects" element={<Projects />} />
          <Route path="/portfolio/contact" element={<ContactMe />} />
          {/* Add more routes as needed */}
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
