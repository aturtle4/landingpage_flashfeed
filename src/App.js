import React, { useEffect, useState } from 'react';
import { CssBaseline, Box } from '@mui/material';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import Loader from './components/Loader';
import './App.css'; // Import CSS for snap scrolling
import Navbar from './components/Navbar';
import AppScreenshots from './components/AppScreenshots';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 650);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <CssBaseline />
      <div className="app-container">
        <Navbar />
        <div className="section"><HeroSection /></div>
        <div className="section"><FeaturesSection /></div>
        {/* <AppScreenshots /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
