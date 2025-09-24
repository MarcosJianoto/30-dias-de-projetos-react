import { styled } from "styled-components"
import GlobalsStyles from "./components/GlobalsStyles/index.jsx"
import Card from "./components/Card/index.jsx"
import { FaBeer, FaHome, FaUser, FaGithub } from 'react-icons/fa';
import { MdAlarm, MdFavorite, MdMarkAsUnread, MdMood } from 'react-icons/md';
import Colors from "./styles/colors.js"
import Sidebar from "./components/Sidebar/index.jsx";
import Introduction from "./components/Introduction/index.jsx";
import FitaNewCharacter from "./components/FitaNewCharacter/index.jsx";
import { useState } from "react";
import { IconContext } from "react-icons";
import imgOne from "./assets/img/1.jpg";
import imgTwo from "./assets/img/2.jpg";
import imgThree from "./assets/img/3.jpg";
import imgFour from "./assets/img/4.jpg";
import imgFive from "./assets/img/5.jpg";
import imgSix from "./assets/img/6.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const FundoGradiente = styled.div`
    background: linear-gradient(#273852 ,#1d8488, #3a5379 );
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    overflow: hidden;
`

const SidebarPosition = styled.div`
    display: flex;
    justify-content: left;
    align-items: left;
    position: absolute;
    top: 50px;
`

const MainPosition = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 50px;
    width: 100%;
`

const FitaNewCharacterPosition = styled.div`

    display: flex;
    flex-wrap: nowrap;
    gap: 150px;
    background: linear-gradient(#273852 ,#1d8488) ;
    width: 120vw;
    height: 50px;
    align-items: center;
    margin-top: 20px;

`
const TitleCharacter = styled.h4`
    font-size: 13px;   
    margin: 0 auto;
    padding: 0;

    text-shadow: 1px 1px 2px black;
`

const characters = [
  { img: imgOne, name: "Svendrux", title: "Shadow Blade Master" },
  { img: imgTwo, name: "Lyravine", title: "Whispering Moon Guardian" },
  { img: imgThree, name: "Zorathis", title: "Flaming Sky Wanderer" },
  { img: imgFour, name: "Kelmora", title: "Silver Dawn Seeker" },
  { img: imgFive, name: "Thrynos", title: "Eternal Flame Knight" },
  { img: imgSix, name: "Velquinn", title: "Mystic Forest Ranger" },
];


const Carousel = () => {

  const [selectedIdx, setSelectedIdx] = useState(null);

  const settings = {
    dots: true,            // bolinhas de navegação
    infinite: true,        // loop infinito
    speed: 500,            // velocidade da animação
    slidesToShow: 5,       // quantos cards aparecem por vez
    slidesToScroll: 1,     // quantos rolam por vez
    responsive: [          // ajustes para mobile
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{ width: "100%", margin: "0 auto", padding: "40px 0" }}>
      <Slider {...settings}>
        {characters.map((char, idx) => (
          <div key={idx} onClick={() => setSelectedIdx(idx)}>
            <Card
              {...char}
              selected={selectedIdx === idx}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};


function App() {

  return (
    <>
      <FundoGradiente>
        <GlobalsStyles />

        <SidebarPosition>
          <Sidebar />
        </SidebarPosition>

        <MainPosition>
          <Introduction />

          <FitaNewCharacterPosition>
            <FitaNewCharacter />
            <FitaNewCharacter />
            <FitaNewCharacter />
            <FitaNewCharacter />
            <FitaNewCharacter />
            <FitaNewCharacter />

          </FitaNewCharacterPosition>
          <TitleCharacter>
            Character to play
          </TitleCharacter>
          <Carousel />

          <FitaNewCharacterPosition>
            <FitaNewCharacter />
            <FitaNewCharacter />
            <FitaNewCharacter />
            <FitaNewCharacter />
            <FitaNewCharacter />
            <FitaNewCharacter />

          </FitaNewCharacterPosition>
        </MainPosition>



      </FundoGradiente >
    </>
  )
}

export default App
