
import React, { use, useEffect, useState } from 'react';

function App() {
  //  8. Converter Celsius para Fahrenheit
  // Descrição: Crie um input para digitar graus Celsius e mostre o valor convertido para Fahrenheit.
  // Objetivo: Trabalhar com eventos, useState e fórmulas simples.
  // Resultado esperado: O valor convertido é atualizado enquanto você digita.

  const [count, setCount] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);

  // useEffect(() => {

  //   setFahrenheit((count * (9 / 5) + 32))

  // }, [count])

  const handleCalc = (count) => {

    return setFahrenheit((count * (9 / 5) + 32))

  }


  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-800 text-white mx-auto'>

      <h1>Fahrenheit -&gt; Celcius</h1>

      <h1 className='mt-5'>Celcius</h1>
      <input type="number" placeholder='Digite o valor' className='border border-white/30 w-50' onChange={(e) => setCount(Number(e.target.value))} />

      <h1 className='mt-5'>Fahrenheit</h1>
      <p className='border border-white/50 w-50 items-center justify-center'>{fahrenheit}</p>

      <button className='border border-white/30 mt-10 rounded-lg px-3 cursor-pointer hover:bg-sky-600 transition' onClick={() => handleCalc(count)}>Converter em Fahrenheit</button>

    </div >
  )
}

export default App
