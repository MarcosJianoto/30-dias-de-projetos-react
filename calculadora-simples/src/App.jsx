import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [result, setResult] = useState(0)
  const [operacao, setOperacao] = useState('Somar')
  const [number1, setNumber1] = useState(0)
  const [number2, setNumber2] = useState(0)

  useEffect(() => {
    switch (operacao) {
      case 'somar': setResult(number1 + number2); break;
      case 'subtrair': setResult(number1 - number2); break;
      case 'dividir': setResult(number1 / number2); break;
      case 'multiplicar': setResult(number2 !== 0 ? number1 / number2 : 'Erro'); break;
      default:
        setResult(0);
    }
  }, [number1, number2, operacao])

  return (
    <>
      <div>
        <h2>Calculadora React</h2>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40vh', width: '25vh', flexDirection: 'column', border: '1px solid red' }}>

        <div>

          <div style={{ marginBottom: '30px' }}>
            <h3>Primeiro número: </h3>
            <input type="number" value={number1} onChange={(e) => setNumber1(Number(e.target.value))} />
          </div>

          <div>
            <h3>Segundo número: </h3>
            <input type="number" value={number2} onChange={(e) => setNumber2(Number(e.target.value))} />

          </div>

          <div>
            <h3>Operação:</h3>
            <select value={operacao} onChange={(e) => setOperacao(e.target.value)}>
              <option value="somar" >Somar</option>
              <option value="subtrair">Subtrair</option>
              <option value="multiplicar">Multiplicar</option>
              <option value="dividir">Dividir</option>
            </select>
          </div>

          <p> Resultado: {result} </p>


        </div>

      </div >
    </>
  )
}

export default App
