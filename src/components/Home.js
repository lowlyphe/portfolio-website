import React from 'react'
import Intro from "./Intro";
import Technologies from "./Technologies";
import Project from './Project';
import Contact from './Contact'

export default function () {
  return (
    <div className='w-full h-full p-16 '>
        
      <div className='flex flex-col md:flex-row items-end space-x-4'>
        <Intro/>
        <Technologies />
      </div>
      <div className='my-16 text-3xl mx-auto0'>
        <Project />
      </div>
      <Contact />
      
    </div>
  )
}
