
import React, { useState } from 'react';

function App() {

  const [enabled, setEnabled] = useState(false);



  return (

    <div className={`h-screen items-center justify-center flex flex-column transition duration-1000 ease-in-out ${enabled ? "bg-gradient-to-br from-gray-900 to-purple-600" : "bg-gradient-to-br from-white via-blue-100 to-blue-300"}`} >

      <button
        onClick={() => setEnabled(!enabled)}
        className={`relative inline-flex h-6.5 w-12.5 items-center rounded-full transition duration-1000 ease-in-out shadow-inner ${enabled ? "bg-gray-800 shadow-gray-600" : "bg-blue-300 shadow-blue-500"
          }`}
      >
        <span
          className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform duration-1000 ease-in-out ${enabled ? "translate-x-[24px]" : "translate-x-0.5"
            }`}
        />
      </button>

    </ div>


  )
}

export default App
