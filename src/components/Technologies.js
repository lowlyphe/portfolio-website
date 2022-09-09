import React from 'react'
import Typist from "react-typist";
import cell from '../assets/cell-phone.svg'

export default function Technologies() {
  return (
    <div className='text-2xl flex flex-col items-start text-left md:text-4xl md:flex-row'>
        <p className='text-white'>
            I build applications with:&nbsp; 
        </p>
        <Typist>
            <span className='text-react'>React</span>
            <Typist.Backspace count={5} delay={500} />
            <span className='text-node'>Node</span>
            <Typist.Backspace count={4} delay={500} />
            <span className='text-psql'>PostgreSQL</span>
            <Typist.Backspace count={10} delay={500} />
            <span className='text-tailwind'>TailwindCSS</span>
            <Typist.Backspace count={11} delay={500} />
            <span className='text-red-500'>Responsive Layouts</span>
            <Typist.Backspace count={18} delay={500} />
            <span className='text-js'>Javascript</span>
            <Typist.Backspace count={10} delay={500} />
            <span className='text-node'>Express</span>
            <Typist.Backspace count={7} delay={500} />
            <span className='text-white'>You in mind</span>
        </Typist>
    </div>
    
    
  )
}
