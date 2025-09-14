import { styled } from "styled-components"
import GlobalsStyles from "./components/GlobalsStyles/index.jsx"
import Cabecalho from "./components/Cabecalho/index.jsx"
import CampoTexto from "./components/CampoTexto/index.jsx"
import BarraLateral from "./components/BarraLateral/index.jsx"




const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100vw;
  min-height: 100vh;
`

const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

function App() {

  return (
    <>
      <FundoGradiente>
        <GlobalsStyles />

        <TopBar>
          <Cabecalho />
          <CampoTexto />
        </TopBar>

        <BarraLateral />

      </FundoGradiente>
    </>
  )
}

export default App
