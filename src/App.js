import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Ads from './components/Ads';
import AboutUs from './components/AboutUs';
import Alert from './components/Alert';
import { useState } from 'react';
 
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from './components/Footer';
 
 
function App() {
  const [alert, setAlert] = useState(null);
 
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  return (
    <>
      <Router>
        <Navbar title="PlayText" aboutText="About Us" />
        <Alert alert={alert} />
        <Ads />
        <Routes>
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
        <Footer />
      </Router>
 
    </>
  );
}
 
export default App;