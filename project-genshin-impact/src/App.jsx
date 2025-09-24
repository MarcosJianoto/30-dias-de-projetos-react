

import styled from "styled-components"
import GlobalStyles from "./components/GlobalsStyles"
import Background from "./assets/1.webp"
import Menu from "./components/Menu"

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
`


function App() {




  return (
    <BackgroundImg>
      <GlobalStyles />

      <ContainerPrincipal>
        <Menu />


      </ContainerPrincipal>



    </BackgroundImg>
  )
}

export default App
