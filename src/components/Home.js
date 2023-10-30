import React from 'react'
import Intro from "./Intro";
import Technologies from "./Technologies";
import ProjectBox from './ProjectBox';
import Contact from './Contact'
import Images from './Images';

export default function () {
  return (
    <div className='w-full h-full p-16 '>
        
      <div className='flex flex-col'>
        <Intro/>
        <Technologies />
      </div>
      <div className='my-16 text-3xl'>
        <ProjectBox />
      </div>
      <Contact />
      
    </div>
  )
}
