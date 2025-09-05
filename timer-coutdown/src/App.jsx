
import React, { useEffect, useState } from 'react';

function App() {

  const [count, setCount] = useState(10);


  const diminuirValor = () => {
    if (count > 0) setCount(prev => prev - 1)
  }

  useEffect(() => {
    if (count > 0) {
      const id = setInterval(() => {
        setCount(prev => prev - 1);
      }, 1000);
      return () => {
        clearInterval(id);
      }
    }
  }, [count]);


  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-800 text-white'>
      <div>Contador automático</div>
      <h1>{count}</h1>
      <button onClick={diminuirValor}>clq</button>

    </div >
  )
}

export default App
