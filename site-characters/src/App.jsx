import { styled } from "styled-components"
import GlobalsStyles from "./components/GlobalsStyles/index.jsx"
import Card from "./components/Card/index.jsx"
import { FaBeer, FaHome, FaUser, FaGithub } from 'react-icons/fa';
import { MdAlarm, MdFavorite, MdMarkAsUnread, MdMood } from 'react-icons/md';
import Colors from "./styles/colors.js"
import Sidebar from "./components/Sidebar/index.jsx";

const FundoGradiente = styled.div`
  background: linear-gradient(#fdfae7, #303338 );
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  align-items: center;
  position: relative;
`

const SidebarPosition = styled.div`
    display: flex;
    justify-content: left;
    align-items: left;
    position: absolute;
    top: 50px;
`

function App() {

  return (
    <>
      <FundoGradiente>
        <GlobalsStyles />

        <SidebarPosition>
          <Sidebar />
        </SidebarPosition>


      </FundoGradiente >
    </>
  )
}

export default App
