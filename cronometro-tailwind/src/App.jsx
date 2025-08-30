import React, { useState, useRef } from 'react'
import iconReact from './assets/react.png'
import Square from './components/square'
import Points from './components/Points'

function App() {

  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  const intervalRef = useRef(null)

  const tick = () => {
    setTime(prev => {
      let { days, hours, minutes, seconds } = prev

      seconds++

      if (seconds === 60) {
        seconds = 0
        minutes++
      }

      if (minutes === 60) {
        minutes = 0
        hours++
      }

      if (hours === 24) {
        hours = 0
        days++
      }

      return { days, hours, minutes, seconds }
    })
  }

  const startTimer = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(tick, 1000)
    }
  }

  const stopTimer = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = null
  }

  const resetTimer = () => {
    stopTimer()
    setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  }

  return (

    < div className='h-screen w-full flex flex-col justify-center items-center bg-gradient-to-br from-blue-200 to-blue-700' style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className=' text-white text-5xl font-medium flex items-center gap-4'>
        <img src={iconReact} alt="icone react" className='w-15' />
        React countdown timer
      </div>

      <div className='flex gap-1 items-center mt-5'>
        <div>
          <div className='flex flex-col items-center leading-none'>
            <Square number={time.days} />
            <span className='text-white text-2xl'>DAYS</span>
          </div>
        </div>

        <div className='flex mb-5'><Points points={":"} /></div>

        <div>
          <div className='flex flex-col items-center leading-none'>
            <Square number={time.hours} />
            <span className='text-white text-2xl'>HOURS</span>
          </div>
        </div>

        <div className='flex mb-5'><Points points={":"} /></div>
        <div>

          <div className='flex flex-col items-center leading-none'>
            <Square number={time.minutes} />
            <span className='text-white text-2xl'>MINUTES</span>
          </div>
        </div>

        <div className='flex mb-5'><Points points={":"} /></div>
        <div>

          <div className='flex flex-col items-center leading-none'>
            <Square number={time.seconds} />
            <span className='text-white text-2xl'>SECONDS</span>
          </div>
        </div>
      </div >

      <div className='flex gap-4 mt-5'>
        <button onClick={startTimer} className='text-white text-2xl border border-white rounded-lg p-2 bg-gradient-to-br from-blue-200 to-blue-500 shadow-xl'>Start</button>
        <button onClick={stopTimer} className='text-white text-2xl border border-white rounded-lg p-2 bg-gradient-to-br from-red-400 to-red-600 shadow-xl'>Stop</button>
        <button onClick={resetTimer} className='text-white text-2xl border border-white rounded-lg p-2 bg-gradient-to-br from-green-400 to-green-600 shadow-xl'>Reset</button>
      </div>

    </div >

  )
}

export default App
