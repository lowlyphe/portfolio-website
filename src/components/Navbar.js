import React from 'react'
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg'
import Resume from './reseme';
import { useState } from 'react';

export default function Navbar() {

  const [openResume, setOpenResume] = useState(false)

  return (
    <nav className='flex justify-end text-black mt-1 mr-6 space-x-6 '>
      <a href={'https://www.linkedin.com/in/kyle-jones-847099232/'} target="_blank"><img className='w-6 h-6' src={linkedin} alt={'linkedin'} /></a>
      <a href={'https://github.com/lowlyphe'} target="_blank"><img className='w-6 h-6' src={github} alt={'github'} /></a>
      <a className='hover:text-white' target="_blank" href={'https://1drv.ms/b/s!Ap_aIu1qHCIYh5dWoqSAaKpNSwoKdQ?e=aWo8Mz'}>My Resume</a>
    </nav>
  )
}
