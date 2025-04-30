import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/loading.json';

const Loader = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Lottie animationData={animationData} loop={false} />
    </div>
  );
};

export default Loader;
