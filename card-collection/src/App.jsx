import { styled } from "styled-components"
import GlobalsStyles from "../../styled-components-2/src/components/GlobalsStyles"
import Card from "./components/Card"


const FundoGradiente = styled.div`
  background: linear-gradient(#0f021d, #000000 );
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center; 
  gap: 40px;
  display: flex;

`

function App() {

  return (
    <>
      <FundoGradiente>
        <GlobalsStyles />
        <Card />

      </FundoGradiente >
    </>
  )
}

export default App
