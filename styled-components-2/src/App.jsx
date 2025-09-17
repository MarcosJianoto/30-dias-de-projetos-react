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
  display: flex;
  justify-content: center;
  align-items: center; 
  gap: 40px;

`

function App() {

  return (
    <>
      <FundoGradiente>
        <GlobalsStyles />

        <Card name={"YINX"} job={"Frontend Developer"} img={OneImage} text={"Frontend Developer: Cria interfaces interativas e responsivas, transformando ideias em experiências digitais fluidas e atraentes."} github={"https://github.com/MarcosJianoto"} linkedin={"https://www.linkedin.com/in/marcosjianoto/"} >


        </ Card>
        <Card name={"SAOX"} job={"Web Designer"} img={TwoImage} text={"Web Designer: Conecta estética e funcionalidade, desenvolvendo layouts que encantam e engajam os usuários."} github={"gustavo"} linkedin={"sdggsd"} >


        </ Card>
        <Card name={"JANL"} job={"Data Analytics"} img={TreeImage} text={"Data Analytics: Transforma dados em insights valiosos, ajudando empresas a tomar decisões estratégicas com precisão."} github={"523523523"} linkedin={"julio"} >


        </ Card >

      </FundoGradiente >
    </>
  )
}

export default App
