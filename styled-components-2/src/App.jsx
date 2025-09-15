import { styled } from "styled-components"
import GlobalsStyles from "../../styled-components-2/src/components/GlobalsStyles"
import Card from "./components/Card"
import OneImage from "/public/imgs/one.png"
import TwoImage from "/public/imgs/two.png"
import TreeImage from "/public/imgs/tree.png"


const FundoGradiente = styled.div`
  background: linear-gradient(#061a31, #000000 );
  width: 100vw;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  

`

function App() {

  return (
    <>
      <FundoGradiente>
        <GlobalsStyles />

        <Card name={"YINX"} job={"Frontend Developer"} img={OneImage} />
        <Card name={"SAOX"} job={"Web Designer"} img={TwoImage} />
        <Card name={"JANL"} job={"Data Analytics"} img={TreeImage} />

      </FundoGradiente>
    </>
  )
}

export default App
