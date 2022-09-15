import React from 'react'
import Typical from 'react-typical'
import react from '../assets/react.png'
import javascript from '../assets/javascript.png'
import node from '../assets/node.png'
import psql from '../assets/psql.png'
import python from '../assets/python.png'
import tailwind from '../assets/tailwind.png'
import jquery from '../assets/jquery.png'
import mongodb from '../assets/mongodb.svg'
import rest from '../assets/rest.svg'
import phone from '../assets/phone.svg'


export default function Technologies() {

  const urls = [javascript, node, react, psql, python, tailwind, jquery, mongodb, rest, phone]
  const divStyle = {
    height: '200px',
    width: "100%",
  }  
  return (
    <div className='text-2xl flex flex-col md:flex-row md:justify-start'>
        <p className='text-white'>
            I build applications with:&nbsp;
        </p>
        <Typical className='text-purple' loop={Infinity} steps={[
              'Javascript',
              1000,
              'Node',
              1000,
              'React',
              1000,
              'PostgreSql',
              1000,
              'Python',
              1000,
              'TailwindCSS',
              1000,
              'jQuery',
              1000,
              'RESTful APIs',
              1000,
              'NoSQL',
              1000,
              'Responsive Layouts',
              1000,
              'You in mind',
              1000,

            ]} />
    </div>
    
    
  )
}
