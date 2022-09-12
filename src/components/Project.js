import React from 'react'
import airbnb from '../assets/airbnb.png'
import kanban from '../assets/kanban.png'
import n64 from '../assets/n64.png'
import entertainment from '../assets/entertainment.png'
import spacewalk from '../assets/spacewalk.png'

export default function Project() {
  return (
    <div className='flex flex-col items-center'>
        <h2 className='text-purple mb-10'>Featured Projects</h2>

        <div className='flex flex-col items-center md:grid grid-cols-3 min-w-1/3 w-2/3'>
            <div className='flip-card text-white text-sm p-2'>
              <div className='flip-card-inner'>
                <div className='flip-card-front'>
                  <img src={airbnb} className='w-full h-full' alt='airbnb' />
                </div>
                <div className='flip-card-back flex flex-col space-y-3 items-start'>
                  <h2>Airbnb Clone - Team Full Stack Application</h2>              
                  <p className='text-left'>
                  This full stack React application was meant to mimic the look and functionality of the Airbnb website. Technologies used include React, JS, Tailwind, RESTful APIs, Nodejs.
                  </p>
                  <a href='https://github.com/mcsp-A-team/a-team-airbnb-clone' alt='github' className='text-purple'>Github Repo</a>
                  <a href='https://a-team-airbnb-clone-static.onrender.com/home' alt='github' className='text-purple'>Live URL</a>
                </div>                
              </div>
            </div>              

            <div className='flip-card text-white text-sm p-2'>
              <div className='flip-card-inner'>
                <div className='flip-card-front'>
                  <img src={kanban} className='w-full h-full' alt='airbnb' />
                </div>
                <div className='flip-card-back flex flex-col space-y-3 items-start'>
                  <h2>Kanban Board</h2>              
                  <p className='text-left'>
                    React full stack application with a PostgreSQL database which allows users to better track projects by assigning tasks and subtasks
                  </p>
                  <a href='https://github.com/lowlyphe/kanban-project' alt='github' className='text-purple'>Github Repo</a>
                </div>                
              </div>
            </div>

            <div className='flip-card text-white text-sm p-2'>
              <div className='flip-card-inner'>
                <div className='flip-card-front'>
                  <img src={n64} className='w-full h-full' alt='airbnb' />
                </div>
                <div className='flip-card-back flex flex-col space-y-3 items-start'>
                  <h2>Nintendo 64 Voting Poll</h2>              
                  <p className='text-left'>
                    Full stack application built with jQuery Node and Postgres that allows the community to vote on their favorite Nintendo 64 game
                  </p>
                  <a href='https://github.com/lowlyphe/best-n64' alt='github' className='text-purple'>Github Repo</a>
                  <a href='https://n64-poll.herokuapp.com/' alt='heroku' className='text-purple'>Live URL</a>
                </div>                
              </div>
            </div>

            <div className='flip-card text-white text-sm p-2'>
              <div className='flip-card-inner'>
                <div className='flip-card-front'>
                  <img src={entertainment} className='w-full h-full' alt='airbnb' />
                </div>
                <div className='flip-card-back flex flex-col space-y-3 items-start'>
                  <h2>Entertainment Web App</h2>              
                  <p className='text-left'>
                    Built as a dummy application to view a list of shows pulled from a database. Used to practice front end UI and UX using Tailwind
                  </p>
                  <a href='https://github.com/lowlyphe/entertainment-web-app' alt='github' className='text-purple'>Github Repo</a>
                  <a href='https://entertainment-web-app-lowlyphe.herokuapp.com/' alt='heroku' className='text-purple'>Live URL</a>
                </div>                
              </div>
            </div>

            <div className='flip-card text-white text-sm p-2'>
              <div className='flip-card-inner'>
                <div className='flip-card-front'>
                  <img src={spacewalk} className='w-full h-full' alt='airbnb' />
                </div>
                <div className='flip-card-back flex flex-col space-y-3 items-start'>
                  <h2>Space Walk - API Project</h2>              
                  <p className='text-left'>
                    First website I built. Used to practice making API calls. FUnctionality centers around using the NASA APIs to display various information about space
                  </p>
                  <a href='https://github.com/lowlyphe/Space-Walk' alt='github' className='text-purple'>Github Repo</a>
                  <a href='https://spacewalk.surge.sh/solar-positions.html' alt='surge' className='text-purple'>Live URL</a>
                </div>                
              </div>
            </div>

        </div>
    </div>
  )
}
