

import styled from "styled-components"
import GlobalStyles from "./components/GlobalsStyles"
import Background from "./assets/1.webp"
import Menu from "./components/Menu"
import Carousel from "./components/Carousel"
import CardsImage from "./components/CardsImage"

const BackgroundImg = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${Background});
  background-size: 300%;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ContainerPrincipal = styled.div`
  width: 80vh;
  height: 99vh;
  border: 1px solid white;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  `

const Main = styled.div`
  width: 80vh;
  height: 99vh;
  border: 2px solid orange;
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
