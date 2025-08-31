
import React, { useState } from 'react';

function App() {

  const [showText, setShowText] = useState(true);


  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-800 text-white'>

      <button className='flex hover:bg-white hover:text-black rounded-lg px-5 hover:cursor-pointer' onClick={() => setShowText(showText === true ? setShowText(false) : true)}>clique aqui</button>
      <br />
      {showText && <div className='flex'>esse texto irá desaparecer</div>}


    </div >
  )
}

export default App
