
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
          <h2 className='text-3xl font-black mb-5'>Full Stack Developer</h2>
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

      <div className='flex justify-between items-center mb-30 bg-gray-800 p-5 rounded-lg mt-30 text-white'>
        <div className='mx-5'>
          <div className='mb-5'>
            <div className='flex items-center'>
              <img src={Github} alt="faculdade" className='w-20' />
              <h1>Fast Learn</h1>
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing, elit. Dolorem natus esse ullam exercitationem soluta ad! Assumenda eum
            </p>
          </div>

          <div>
            <div className='flex items-center'>
              <img src={Github} alt="faculdade" className='w-20' />
              <h1>Fast Learn</h1>
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing, elit. Dolorem natus esse ullam exercitationem soluta ad! Assumenda
            </p>
          </div>
        </div>

        <div>
          <div className='mb-5'>
            <div className='flex items-center'>
              <img src={Github} alt="faculdade" className='w-20' />
              <h1>Fast Learn</h1>
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing, elit. Dolorem natus esse ullam exercitationem soluta ad! Assumenda eum
            </p>
          </div>

          <div>
            <div className='flex items-center'>
              <img src={Github} alt="faculdade" className='w-20' />
              <h1>Fast Learn</h1>
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing, elit. Dolorem natus esse ullam exercitationem soluta ad! Assumenda eum
            </p>
          </div>
        </div>
      </div>

      <div className='flex justify-center items-center mt-30'>
        <h1 className='text-xl text-red-400 font-bold'>Services</h1>
      </div>

      <div className=' text-center text-4xl font-black w-1/2 mx-auto mb-10 mt-10'>
        <h1>Nós temos os melhores serviços!</h1>
      </div>

      <div className='flex justify-between items-center text-center font-low text-gray-600 mb-60'>
        <div className='flex flex-col items-center'>
          <img src={Github} alt="" className='w-15 mb-3' />
          <h2 className='text-2xl mb-2 text-red-400 font-bold'>Design</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing
          </p>
        </div>
        <div className='flex flex-col items-center'>
          <img src={Github} alt="" className='w-15 mb-3' />
          <h2 className='text-2xl mb-2 text-red-400 font-bold'>Design</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing
          </p>
        </div>
        <div className='flex flex-col items-center'>
          <img src={Github} alt="" className='w-15 mb-3 ' />
          <h2 className='text-2xl mb-2 text-red-400 font-bold'>Design</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing
          </p>
        </div>
      </div>

      <div className=' text-center text-4xl font-black w-1/2 mx-auto mb-10 mt-10'>
        <h2 className='text-2xl mb-2 text-red-400 font-bold'>Portfolio</h2>
        <h1>Veja nossos projetos:</h1>
      </div>

    </div >

  )
}  

export default App
