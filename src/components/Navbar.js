import React from 'react'

export default function Navbar() {
  return (
    <nav className='flex justify-end text-white mt-1 mr-6 space-x-6 '>
        <a className='hover:text-purple-500' href={'#'}>My Projects</a>
        <a className='hover:text-purple-500' href={'#'}>My Resume</a>
        <a className='hover:text-purple-500' href={'#'}>My Bio</a>
    </nav>
  )
}
