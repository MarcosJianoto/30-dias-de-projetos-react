import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [result, setResult] = useState(0)
  const [operacao, setOperacao] = useState('Somar')

  return (
    <>
      <div>
        <h2>Calculadora React</h2>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40vh', width: '25vh', flexDirection: 'column', border: '1px solid red' }}>

        <div>

          <div style={{ marginBottom: '30px' }}>
            <h3>Primeiro número: </h3>
            <input type="number" />
          </div>

          <div>
            <h3>Segundo numero: </h3>
            <input type="number" />
          </div>

          <div>
            <h3>Operação:</h3>
            <select value={operacao} onChange={(e) => setOperacao(e.target.value)}>
              <option value="somar">Somar</option>
              <option value="subtrair">Subtrair</option>
              <option value="multiplicar">Multiplicar</option>
              <option value="dividir">Dividir</option>
            </select>
          </div>

          <div>
            <p>Resultado: {result}</p>
          </div>

        </div>

      </div>
    </>
  )
}

export default App
