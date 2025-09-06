
import React, { useState } from 'react';
import MenuRight from './components/MenuRight';
import MenuLeft from './components/MenuLeft';
import pcMarcos from './assets/pc-marcos.png'
import Github from './assets/github.png'
import Instagram from './assets/instagram.png'
import Linkedin from './assets/linkedin.png'


function App() {
  return (

    <div className='h-screen mx-30 my-10'>

      <div className='flex justify-between items-center mb-30'>
        <div>
          <MenuLeft />
        </div>
        <div>
          <MenuRight />
        </div>
      </div>

      <div className='flex justify-between items-center '>
        <div >
          <h1 className='text-6xl font-black mb-5'>Marcos Jianoto</h1>
          <h2 className='text-3xl font-black mb-5'>A web developer.</h2>
          <h2 className='text-lg'>I am currently a university studennt at Wyden University. I am working in movE | Eletromobilidade with React, React Native and Spring Boot.</h2>
          <div className='flex mt-5'>

            <div className='w-20 h-20 rounded-l-lg bg-sky-700 flex items-center justify-center'>
              <img src={Github} alt="github" className='w-8' /></div>

            <div className='w-20 h-20 bg-sky-900  flex items-center justify-center'>
              <img src={Linkedin} alt="linkedin" className='w-8' /></div>

            <div className='w-20 h-20 rounded-r-lg bg-sky-300  flex items-center justify-center'>
              <img src={Instagram} alt="instagram" className='w-8' /></div>
          </div>
        </div>
        <div>
          <img src={pcMarcos} alt="foto marcos" />
        </div>
      </div>

    </div>

  )
}

export default App
