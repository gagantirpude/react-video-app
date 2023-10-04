import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//! Components
import Header from './components/Header';
import Footer from './components/Footer';

//! Pages
import Home from './pages/Home';
import About from './pages/About';
import Videos from './pages/Videos';
import Upload from './pages/Upload';
import Login from './pages/Login';
import Signup from './pages/Signup';

//! App component
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/video" element={<Videos />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <Footer />
    </Router>
  );
};

//! Export
export default App;
