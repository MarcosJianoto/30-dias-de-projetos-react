import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h2>Calculadora React</h2>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30vh', width: '25vh', flexDirection: 'column', border: '1px solid red' }}>

        <div>

          <div style={{ marginBottom: '50px' }}>
            <h3>Primeiro numero: </h3>
            <input type="number" />
          </div>

          <div>
            <h3>Segundo numero: </h3>
            <input type="number" />
          </div>

          <div>
            <select name="tipo de conta" id="1"></select>
          </div>

          <div>
            <p>Resultado: { }</p>
          </div>

        </div>



      </div>
    </>
  )
}

export default App
