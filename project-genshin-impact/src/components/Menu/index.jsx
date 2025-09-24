import styled from "styled-components"
import { MdFavorite, MdAdd } from "react-icons/md";


const Header = styled.header`

    display: flex;
    border: 1px solid white;
    height: 100px;
    width: 100vh;
    justify-content: center;
    align-items: center;

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


const Menu = () => {
    return (

        <Header>
            <QuadIcon>
                <MdFavorite size={30} color="white" />
            </QuadIcon>
            <QuadIcon>
                <MdAdd size={30} color="white" />
            </QuadIcon>
        </Header>

    )
}

export default Menu