import React from 'react'
import Typist from "react-typist";
import cell from '../assets/cell-phone.svg'

export default function Technologies() {
  return (
    <div className='text-4xl flex'>
        <p className='text-white'>
            I build applications with:&nbsp; 
        </p>
        <Typist>
            <span className='text-react'>React</span>
            <Typist.Backspace count={5} delay={200} />
            <span className='text-node'>Node</span>
            <Typist.Backspace count={4} delay={200} />
            <span className='text-psql'>PostgreSQL</span>
            <Typist.Backspace count={10} delay={200} />
            <span className='text-tailwind'>TailwindCSS</span>
            <Typist.Backspace count={11} delay={200} />
            <span className='text-purple-500'>Responsive Layouts</span>
            <Typist.Backspace count={18} delay={200} />
            <span className='text-js'>Javascript</span>
            <Typist.Backspace count={10} delay={200} />
            <span className='text-white'>Express</span>
            <Typist.Backspace count={7} delay={200} />
            <span className='flex'><p className='text-purple-500'>You&nbsp;</p><p className='text-white'>in mind</p></span>
        </Typist>
    </div>
    
    
  )
}
