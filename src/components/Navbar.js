import React from 'react'
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg'

export default function Navbar() {
  return (
    <nav className='flex justify-end text-black mt-1 mr-6 space-x-6 '>
      <a href={'https://www.linkedin.com/in/kyle-jones-847099232/'} target="_blank"><img className='w-6 h-6' src={linkedin} alt={'linkedin'} /></a>
      <a href={'https://github.com/lowlyphe'} target="_blank"><img className='w-6 h-6' src={github} alt={'github'} /></a>
      <a className='hover:text-white' target="_blank" href={'https://onedrive.live.com/?cid=18221C6AED22DA9F&id=18221C6AED22DA9F%21112741&parId=18221C6AED22DA9F%21772&o=OneUp'}>My Resume</a>
    </nav>
  )
}
