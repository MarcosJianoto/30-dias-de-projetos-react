import { styled } from "styled-components"
import GlobalsStyles from "./components/GlobalsStyles/index.jsx"
import Card from "./components/Card/index.jsx"
import { FaBeer, FaHome, FaUser, FaGithub } from 'react-icons/fa';
import { MdAlarm, MdFavorite, MdMarkAsUnread, MdMood } from 'react-icons/md';
import Colors from "./styles/colors.js"
import Sidebar from "./components/Sidebar/index.jsx";
import Main from "./components/Main/index.jsx";

const FundoGradiente = styled.div`
  background: linear-gradient(#94bbd3, #3a5379 );
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

        <Main>


        </Main>

      </FundoGradiente >
    </>
  )
}

export default App
