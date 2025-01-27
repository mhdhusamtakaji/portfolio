import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';
import AboutPage from './pages/AboutPage/AboutPage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import ContactPage from './pages/ContactPage/ContactPage';
import Footer from './components/Footer/Footer';
import BackToTop from './components/BackToTop/BackToTop';
import './App.css';

function App({ toggleTheme, isDarkMode }) {
  return (
    <Router>
       <div className="app-container">
       <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
        <BackToTop />
        <Footer />
       </div>
    </Router>
  );
}

export default App;
