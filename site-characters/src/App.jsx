import { styled } from "styled-components"
import GlobalsStyles from "../../styled-components-2/src/components/GlobalsStyles/index.jsx"
import Card from "./components/Card/index.jsx"
import { FaBeer, FaHome, FaUser, FaGithub } from 'react-icons/fa';
import { MdAlarm, MdFavorite, MdMarkAsUnread, MdMood } from 'react-icons/md';
import Colors from "./styles/colors.js"

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
          <Card image={< FaHome size={30} color={Colors.greenLight} />} title={"e-Commerce"} text={"Build your online store"} color={Colors.greenDark} />
          <Card image={< FaBeer size={30} color={Colors.orangeLight} />} title={"Graphic design"} text={"Premium design & visuals."} color={Colors.orangeDark} />
        </QuadMenor>

      </FundoGradiente >
    </>
  )
}

export default App
