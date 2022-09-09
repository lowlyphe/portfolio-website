import React from 'react'
import airbnb from '../assets/airbnb.png'

export default function Project() {
  return (
    <div>
        <h2 className='text-white'>My Projects</h2>

        <div className='grid grid-cols-4 gap-3'>
            <div className='flip-card w-64 text-white text-sm p-2'>
              <div className='flip-card-inner'>
                <div className='flip-card-front'>
                  <img src={airbnb} className='w-full' alt='airbnb' />
                </div>
                <div className='flip-card-back flex flex-col space-y-3 items-start'>
                  <h2>Airbnb Clone - Team Full Stack Application</h2>              
                  <p className='text-left'>
                  This full stack React application was meant to mimic the look and functionality of the Airbnb website. Technologies used include React, JS, Tailwind, RESTful APIs, Nodejs.
                  </p>
                  <a href='https://github.com/mcsp-A-team/a-team-airbnb-clone' alt='github' className='text-purple'>Github Repo</a>
                </div>                
              </div>
            </div>
              

            <div className='border border-solid-1 border-white w-64'>
            </div>
            <div className='border border-solid-1 border-white w-64'>
            </div>
            <div className='border border-solid-1 border-white w-64'>
            </div>
            <div className='border border-solid-1 border-white w-64'>
            </div>
            <div className='border border-solid-1 border-white w-64'>
            </div>
        </div>
    </div>
  )
}
