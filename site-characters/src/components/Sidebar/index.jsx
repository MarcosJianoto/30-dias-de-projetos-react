import styled from "styled-components"
import Logo from "../../assets/img/logo_marcosjianoto.jpg"

const Header = styled.header`
    display: flex;
    gap: 30px;
    position: absolute;
    left: 2vh;
    top: 12.5px;
    width: 100px;
    font-size: 20px;
    width: 200px;
`

const SquareSidebar = styled.div`
    display: flex;
    width: 95vw;
`

const UlSidebar = styled.ul`
    list-style-type: none;
    display: flex;
    gap: 30px;
    position: absolute;
    left: 20vh;

    img{
        width: 50px;
    }
`

const ContactPosition = styled.div`
    list-style-type: none;
    display: flex;
    position: absolute;
    right: 10px;
    gap: 30px; 
`

const CPButton = styled.button`
    margin-top: 10px;
    border: 1.5px solid white ;
    border-radius: 30px;
    padding: 5px 20px;
    background-color: #94bbd3 ;
    color: white;

    &:hover{
        color: #94bbd3;
        background-color: white;
        cursor: pointer;
    }
`


const Sidebar = () => {
    return (
        <SquareSidebar>
            <Header>
                Header
            </Header>
            <UlSidebar>
                <li>Profile</li>
                <li>Character</li>
                <li>Game</li>
            </UlSidebar>
            <ContactPosition>

                <CPButton>Search</CPButton>
                <CPButton>For more info</CPButton>
            </ContactPosition>
        </SquareSidebar>
    )
}

export default Sidebar