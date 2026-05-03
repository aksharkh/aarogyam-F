import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Book from './pages/Book';
import PatientPortal from './pages/PatientPortal';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/book" element={<Book />} />
        <Route path="/patient-portal" element={<PatientPortal />} />
      </Routes>
    </Layout>
  );
}

export default App;
