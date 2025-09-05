
import React, { useEffect, useState } from 'react';

function App() {

  const [count, setCount] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev + 1)
    }, 1000)
    return () => clearInterval(interval);
  }, [])

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-800 text-white'>
      <div>Contador de cima pra baixo</div>

      <div>valor que ele vai contar de cima pra baixo:</div>
      <h1>{count}</h1>

    </div >
  )
}

export default App
