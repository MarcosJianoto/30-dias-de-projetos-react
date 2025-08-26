
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(0);
  const [operacao, setOperacao] = useState("somar");

  useEffect(() => {
    switch (operacao) {
      case 'somar':
        setResult(number1 + number2);
        break;
      case 'subtrair':
        setResult(number1 - number2);
        break;
      case 'dividir':
        setResult(number2 !== 0 ? number1 / number2 : 'Erro');
        break;
      case 'multiplicar':
        setResult(number1 * number2);
        break;
      default:
        setResult(0);
    }
  }, [number1, number2, operacao])



  return (
    <div>

      <div>
        <h2>Calculadora React</h2>
      </div>
      <div>
        Primeiro Nro
        <br />
        <input type="number" value={number1} onChange={(e) => setNumber1(Number(e.target.value))} />
      </div>
      <br />
      <div>
        Segundo Nro
        <br />
        <input type="number" value={number2} onChange={(e) => setNumber2(Number(e.target.value))} />
      </div>
      <div>
        <select value={operacao} onChange={(e) => setOperacao(e.target.value)}>
          <option value="somar">Somar</option>
          <option value="subtrair">Subtrair</option>
          <option value="dividir">Dividir</option>
          <option value="multiplicar">Multiplicar</option>
        </select>
        <p>Resultado {result}</p>
      </div>

    </div>
  )
}

export default App
