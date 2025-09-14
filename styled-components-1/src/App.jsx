import { styled } from "styled-components"
import GlobalsStyles from "./components/GlobalsStyles/index.jsx"
import Cabecalho from "./components/Cabecalho/index.jsx"
import CampoTexto from "./components/CampoTexto/index.jsx"




const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100vh;
  min-height: 100vh;
`

function App() {

  return (
    <>
      <FundoGradiente>
        <GlobalsStyles />

        <Cabecalho />
        <CampoTexto />






      </FundoGradiente>
    </>
  )
}

export default App
