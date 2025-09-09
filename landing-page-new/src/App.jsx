import './App.css';
import Menu from './components/Menu';
import githubLogo from './assets/github.png';
import linkedinLogo from './assets/linkedin.png';
import instagramLogo from './assets/instagram.png';



function App() {
  return (

    <div className="flex flex-col bg-gray-800 text-white min-h-screen">

      <div className="flex justify-between items-center w-11/12 mx-auto my-4">
        <div>
          <h3>Portfolio</h3>
        </div>

        <div className="flex space-x-10 text-lg">
          <Menu one={"Projects"} two={"Tecnologias"} three={"About"} />
        </div>

        <div className="flex space-x-10 text-lg">
          <Menu one={githubLogo} two={linkedinLogo} three={instagramLogo} />
        </div>
      </div>

      <div className="flex justify-center items-center">
        Body
      </div>

    </div>

  )
}

export default App
