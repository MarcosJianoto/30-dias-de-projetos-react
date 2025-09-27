import styled from "styled-components"
import { MdFavorite, MdAdd } from "react-icons/md";


const MenuContainer = styled.header`
    display: flex;
    height: 8vh;
    width: 100vh;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
    `

const Header = styled.div`
    display: flex;
    justify-content: left;
`

const MenuCenter = styled.div`
    display: flex;
    width: 300px;
    padding: 0;

    ul {
        display: flex;
        list-style: none;
        padding: 0;
        margin: 0;
        width: 100%;
        align-items: center;
    }

    ul li:nth-child(2) {
        flex-grow: 1;
        text-align: center;
    }

`

const MenuRight = styled.div`
    display: flex;
    justify-content: left;
    width: 100px;
`


const QuadIcon = styled.div`
    display: flex;
    width: 40px;
    height: 40px;
    margin-right: 20px;
    border: 1px solid white;
    justify-content: center;
    align-items: center;
    background: linear-gradient(#2489aa, #014961);
`

const BotaoMenu = styled.button`

    
  background: linear-gradient(135deg, #2489aa, #014961);
  color: white;
  font-size: 16px;
  font-weight: 500;
  padding: 5px 30px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.25);
  }

  &:active {
    transform: translateY(0px);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }
    

`


const Menu = () => {
    return (

        <MenuContainer>
            <Header>
                <QuadIcon>
                    <MdFavorite size={30} color="white" />
                </QuadIcon>
                <QuadIcon>
                    <MdAdd size={30} color="white" />
                </QuadIcon>
            </Header>
            <MenuCenter>
                <ul>
                    <li>Home</li>
                    <li>Search</li>
                    <li>Explore</li>
                </ul>
            </MenuCenter>
            <MenuRight>
                <BotaoMenu>Menu</BotaoMenu>
            </MenuRight>
        </MenuContainer>

    )
}

export default Menu