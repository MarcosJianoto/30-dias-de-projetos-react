import { styled } from "styled-components"
import GlobalsStyles from "./components/GlobalsStyles/index.jsx"
import Card from "./components/Card/index.jsx"
import { FaBeer, FaHome, FaUser, FaGithub } from 'react-icons/fa';
import { MdAlarm, MdFavorite, MdMarkAsUnread, MdMood } from 'react-icons/md';
import Colors from "./styles/colors.js"
import Sidebar from "./components/Sidebar/index.jsx";
import Introduction from "./components/Introduction/index.jsx";
import FitaNewCharacter from "./components/FitaNewCharacter/index.jsx";

const FundoGradiente = styled.div`
    background: linear-gradient(#273852 ,#1d8488, #3a5379 );
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    overflow: hidden;
`

const SidebarPosition = styled.div`
    display: flex;
    justify-content: left;
    align-items: left;
    position: absolute;
    top: 50px;
`

const MainPosition = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 50px;
    width: 100%;
`

const FitaNewCharacterPosition = styled.div`

    display: flex;
    flex-wrap: nowrap;
    gap: 150px;
    background: linear-gradient(#273852 ,#1d8488) ;
    width: 120vw;
    height: 50px;
    align-items: center;
    margin-top: 20px;

`

const CharacterContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 50px;
    width: 100%;


`

function App() {

  return (
    <>
      <FundoGradiente>
        <GlobalsStyles />

        <SidebarPosition>
          <Sidebar />
        </SidebarPosition>

        <MainPosition>
          <Introduction />

          <FitaNewCharacterPosition>
            <FitaNewCharacter />
            <FitaNewCharacter />
            <FitaNewCharacter />
            <FitaNewCharacter />
            <FitaNewCharacter />
            <FitaNewCharacter />

          </FitaNewCharacterPosition>

          <CharacterContainer>
            <Card />
          </CharacterContainer>

        </MainPosition>


      </FundoGradiente >
    </>
  )
}

export default App
