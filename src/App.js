import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FormLaporan from './components/FormLaporan';
import Footer from './components/Footer';
import LiveLocation from './Pages/LiveLocation';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Hero />
            <FormLaporan />
            <Footer />
          </>
        } />
        <Route path="/live-location" element={<LiveLocation />} />
      </Routes>
    </Router>
  );
}

export default App;
