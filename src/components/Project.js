import React from 'react'

export default function Project({project}) {
  if (project.liveUrl && project.githubUrl) {
    return (
      <div className='flip-card text-white text-sm p-2'>
                <div className='flip-card-inner'>
                  <div className='flip-card-front'>
                    <img src={project.imgSrc} className='w-full h-full' alt='airbnb' />
                  </div>
                  <div className='flip-card-back flex flex-col space-y-3 items-start'>
                    <h2>{project.header}</h2>              
                    <p className='text-left'>{project.textContent}</p>
                    <a href={project.githubUrl} alt='github' className='text-purple'>Github Repo</a>
                    <a href={project.liveUrl} alt='github' className='text-purple'>Live URL</a>
                  </div>                
                </div>
              </div>  
    )
  } else if (!project.githubUrl) {
    return (
      <div className='flip-card text-white text-sm p-2'>
                <div className='flip-card-inner'>
                  <div className='flip-card-front'>
                    <img src={project.imgSrc} className='w-full h-full' alt='airbnb' />
                  </div>
                  <div className='flip-card-back flex flex-col space-y-3 items-start'>
                    <h2>{project.header}</h2>              
                    <p className='text-left'>{project.textContent}</p>
                    <a href={project.liveUrl} alt='github' className='text-purple'>Live URL</a>
                  </div>                
                </div>
              </div> 
    )
  } else {
    return (
      <div className='flip-card text-white text-sm p-2'>
                <div className='flip-card-inner'>
                  <div className='flip-card-front'>
                    <img src={project.imgSrc} className='w-full h-full' alt='airbnb' />
                  </div>
                  <div className='flip-card-back flex flex-col space-y-3 items-start'>
                    <h2>{project.header}</h2>              
                    <p className='text-left'>{project.textContent}</p>
                    <a href={project.githubUrl} alt='github' className='text-purple'>Github Repo</a>
                  </div>                
                </div>
              </div> 
    )
  }
}
