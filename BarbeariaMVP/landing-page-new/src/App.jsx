import './App.css';
import Menu from './components/Menu';
import githubLogo from './assets/github.png';
import linkedinLogo from './assets/linkedin.png';
import instagramLogo from './assets/instagram.png';



function App() {

  return (

    <div className="flex flex-col bg-gray-800 text-white min-h-screen" >

      <div className="flex justify-between items-center w-15/18 mx-auto py-10 active-bg-gray-900">

        <h3>Portfolio</h3>

        <div className='flex gap-9'>
          <Menu one={"Projects"} two={"Technologias"} three={"About"} />

          <Menu one={githubLogo} two={linkedinLogo} three={instagramLogo} />
        </div>

      </div>

      <div className="flex gap-10 mt-20 ">
        <div className='flex flex-col items-center w-5/12'>
          <img className='w-40 h-40 rounded-full border-4 border-white' src="https://avatars.githubusercontent.com/u/109130634?v=4" alt="Profile" />

          <h1 className='text-6xl text-center mb-8 text-left mx-20'>Welcome to my Portfolio</h1>

          <h2 className='text-2xl text-left mx-20 mb-8'>
            Here you will find information about my projects, technologies I use, and a bit about myself.
          </h2>

          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-12 rounded hover:cursor-pointer'>CONTACT ME</button>

        </div>
        <div className='flex w-5/12'>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded'>
            Contact Me

            Here you will find information about my projects, technologies I use, and a bit about myself.

            Here you will find information about my projects, technologies I use, and a bit about myself.

            <br />
            <br />

            Here you will find information about my projects, technologies I use, and a bit about myself.

            Here you will find information about my projects, technologies I use, and a bit about myself.

            <br />
            <br />

            Here you will find information about my projects, technologies I use, and a bit about myself.

            Here you will find information about my projects, technologies I use, and a bit about myself.

            <br />
            <br />

            Here you will find information about my projects, technologies I use, and a bit about myself.

            Here you will find information about my projects, technologies I use, and a bit about myself.


          </button>
        </div>

      </div>

    </div>

  )
}

export default App
