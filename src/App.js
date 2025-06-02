import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FormLaporan from './components/FormLaporan';
import Footer from './components/Footer';
import LiveLocation from './Pages/LiveLocation';


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
