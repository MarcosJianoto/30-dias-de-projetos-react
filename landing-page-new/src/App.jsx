import './App.css';
import Github from './assets/github.png'
import Linkedin from './assets/linkedin.png'
import Facebook from './assets/facebook.png'

function App() {

  return (

    <div className="flex flex-col min-h-screen bg-gray-950" >

      <div className='flex-1 flex flex-col justify-center items-center text-white'>
        <div className=' text-sm items-end'>i am</div>
        <div className='font-black text-7xl my-5'>MARCOS JIANOTO</div>
        <div className="flex flex-col text-sm mt-2 items-end">
          <div>full stack</div>
          <div>developer</div>
        </div>
      </div>

      <div className='flex flex-col gap-3 justify-center items-start ml-10 text-white pb-5'>
        <a href="#">
          <img src={Github} alt="ícone do github" className='h-5' />
        </a>
        <a href="#">
          <img src={Linkedin} alt="ícone do linkedin" className='h-5' />
        </a>
        <a href="#">
          <img src={Facebook} alt="ícone do facebook" className='h-4' />
        </a>
      </div>


    </div >

  )
}

export default App
