

import styled from "styled-components"
import GlobalStyles from "./components/GlobalsStyles"
import Background from "./assets/wallpaper.webp"
import Menu from "./components/Menu"
import Carousel from "./components/Carousel"
import CardsImage from "./components/CardsImage"

const BackgroundImg = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: 300%;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${Background});
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.45;
    z-index: -1;
  }

`

const ContainerPrincipal = styled.div`
  width: 80vh;
  height: 99vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  `

const Main = styled.div`
  width: 80vh;
  height: 99vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`


function App() {




  return (
    <BackgroundImg>
      <GlobalStyles />

      <ContainerPrincipal>

        <Menu />

        <Main>
          <Carousel />
          <CardsImage />
        </Main>

      </ContainerPrincipal>



    </BackgroundImg>
  )
}

export default App
