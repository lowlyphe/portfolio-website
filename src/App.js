import React, { useState } from 'react'
import Intro from "./components/Intro";
import Navbar from './components/Navbar';
import Technologies from "./components/Technologies";

function App() {
  return (
    <>
    <Navbar />
    <div className='flex m-16 items-end space-x-4'>
      
      <Intro/>
      <Technologies />
    </div>
    </>
    
  );
}

export default App;
