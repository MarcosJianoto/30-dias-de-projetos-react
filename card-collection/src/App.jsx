import { styled } from "styled-components"
import GlobalsStyles from "../../styled-components-2/src/components/GlobalsStyles"
import Card from "./components/Card"
import { FaBeer, FaHome, FaUser, FaGithub } from 'react-icons/fa';
import { MdAlarm, MdFavorite } from 'react-icons/md';


const FundoGradiente = styled.div`
  background: linear-gradient(#0f021d, #000000 );
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center; 
  gap: 20px;
  flex-wrap: wrap;
  align-items: center;
`

const QuadMenor = styled.div`
  width: 80vw;
  height: 60vh;
  border: 1px solid white;
  justify-content: center;
  align-items: center;
  gap: 20px;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
`

function App() {

  return (
    <>
      <FundoGradiente>
        <GlobalsStyles />
        <QuadMenor>
          <Card image={< FaHome size={30} color="white" />} title={"e-Commerce"} text={"Build your online store"} />
          <Card image={< FaHome size={30} color="white" />} title={"e-Commerce"} text={"Facebook & Google ads"} />
          <Card image={< FaHome size={30} color="white" />} title={"e-Commerce"} text={"Attract more clients"} />
          <Card image={< FaHome size={30} color="white" />} title={"e-Commerce"} text={"Premium design & visuals"} />
          <Card image={< FaHome size={30} color="white" />} title={"e-Commerce"} text={"Words that sell"} />
          <Card image={< FaHome size={30} color="white" />} title={"e-Commerce"} text={"Content for your brand"} />
          <Card image={< FaHome size={30} color="white" />} title={"e-Commerce"} text={"Grow your business online."} />
          <Card image={< FaHome size={30} color="white" />} title={"e-Commerce"} text={"Turn more visitors into customers."} />

        </QuadMenor>

      </FundoGradiente >
    </>
  )
}

export default App
