import React from 'react'
import Intro from "./Intro";
import Technologies from "./Technologies";
import Project from './Project';

export default function () {
  return (
    <div className='w-full h-full p-16 '>
        
      <div className='flex flex-col md:flex-row items-end space-x-4'>
        <Intro/>
        <Technologies />
      </div>
      <div className='my-16 text-3xl mx-auto'>
        <Project />
      </div>
      
    </div>
  )
}
