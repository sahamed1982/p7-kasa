import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// *************** pages *************************************************
import Home from './pages/Home';
import Accomodation from './pages/Accomodation'
import About from './pages/About'
import Error from './pages/Error'
// *************** components *************************************************

import Header from './components/Header'
import Footer from './components/Footer'
// *************** c s s  *************************************************
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Router>
    <Header />
    <Footer />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/accomodation/:id" element={<Accomodation />} />
          <Route path="/about" element={<About />} /> 
          <Route path="*" element={<Error />} /> 
        </Routes>
        
  </Router>
  </React.StrictMode>
);


