import { useState } from 'react'
import iconReact from './assets/react.png'
import Square from './components/square'
import Points from './components/Points'

function App() {
  const [days, setDays] = useState(10)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  return (

    < div className='h-screen w-full flex flex-col justify-center items-center bg-gradient-to-br from-blue-200 to-blue-700' style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className=' text-white text-5xl font-medium flex items-center gap-4'>
        <img src={iconReact} alt="icone react" className='w-15' />
        React countdown timer
      </div>

      <div className='flex gap-1 items-center mt-5'>
        <div>
          <div className='flex flex-col items-center leading-none'>
            <Square number={days} />
            <span className='text-white text-2xl'>DAYS</span>
          </div>
        </div>

        <div className='flex mb-5'><Points points={":"} /></div>

        <div>
          <div className='flex flex-col items-center leading-none'>
            <Square number={hours} />
            <span className='text-white text-2xl'>HOURS</span>
          </div>
        </div>

        <div className='flex mb-5'><Points points={":"} /></div>
        <div>

          <div className='flex flex-col items-center leading-none'>
            <Square number={minutes} />
            <span className='text-white text-2xl'>MINUTES</span>
          </div>
        </div>

        <div className='flex mb-5'><Points points={":"} /></div>
        <div>

          <div className='flex flex-col items-center leading-none'>
            <Square number={seconds} />
            <span className='text-white text-2xl'>SECONDS</span>
          </div>
        </div>
      </div >
    </div >

  )
}

export default App
