import './App.css';
import Github from './assets/github.png'
import Linkedin from './assets/linkedin.png'
import Facebook from './assets/facebook.png'

function App() {

  return (

    <div className="bg-gray-950" >

      <div className='flex flex-col h-screen border border-white justify-center'>
        <div className='flex flex-col justify-center items-center text-white my-80'>
          <div className='text-sm'>i am</div>
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
      </div>



      <div>
        <div className='text-white text-center text-xs pb-3'>Designed by <a href="https://www.freepik.com/free-vector/gradient-technology-background_5389761.htm#query=technology%20background&position=0&from_view=search&track=sph" className='underline'>Freepik</a></div>
      </div>

      <div>
        <div className='text-white text-center text-xs pb-3'>© 2024 Marcos Jianoto. All rights reserved.</div>
      </div>


    </div >

  )
}

export default App
