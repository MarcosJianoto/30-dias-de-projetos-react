
import React, { use, useState } from 'react';

function App() {

  const [arr, setArr] = useState(["ana", "bia", "carlos"]);

  const [count, setCount] = useState("");

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      {arr.map((num, index) => (
        <li key={index} > {num} </li>
      ))}

      <input type="text" onChange={(e) => setCount(e.target.value)} />

      <button onClick={() => setArr([...arr, count])} className='border' >adicionar nome</button>
    </div>
  )
}

export default App
