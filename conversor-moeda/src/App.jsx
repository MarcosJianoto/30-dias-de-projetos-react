import { useEffect, useState } from 'react'

function App() {
  const [brl, setBrl] = useState(0)
  const [usd, setUsd] = useState(0)
  let [cotacao, setCotacao] = useState(0)


  useEffect(() => {
    fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL')
      .then(response => response.json())
      .then(data => {
        const valor = Number(data.USDBRL.bid);
        setCotacao(valor);

      }).catch(error => {
        console.error('Erro ao buscar a cotação:', error);
      });
  }, []);

  const handleConvert = () => {
    setBrl(usd * cotacao);
  }

  return (

    <div className="min-h-screen bg-yellow-50 p-4">
      <div className='mx-auto p0 text-left border border-black w-90 mt-10 rounded-lg bg-white'>
        <div className='p-4'>
          <h1 className='text-2xl font-bold'>Conversor de Moeda</h1>
          <h4>Cotação Atual: {cotacao}  </h4>
          <h2 className='font-bold pt-1' >USD:</h2>
          <div className='text-center' >
            <input type="number" className='border border-gray-400 rounded-sm w-full p-2' onChange={(e) => setUsd(Number(e.target.value))} />
          </div>
          <h2 className='font-bold mt-4 mb-1' >BRL:</h2>
          {usd * cotacao}
        </div>

        <div>
          <hr className='border-gray-200' />
        </div>

        <div className='p-4 text-center'>
          <button className='bg-green-500 text-[#fff] font-bold px-31 py-2 rounded' >Converter</button>
        </div>
      </div>
    </div>

  )
}

export default App 
