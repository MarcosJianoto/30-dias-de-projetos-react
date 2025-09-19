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

const ContactPosition = styled.ul`
    list-style-type: none;
    display: flex;
    position: absolute;
    right: 10px;
    gap: 30px;
`


const Sidebar = () => {
    return (
        <SquareSidebar>
            <Header>
                MARCOS JIANOTO
            </Header>
            <UlSidebar>
                <li>HOME</li>
                <li>LANGUAGENS</li>
                <li>PROJECTS</li>
            </UlSidebar>
            <ContactPosition>
                <li>ABOUT ME</li>
                <li>CONTACT</li>
            </ContactPosition>
        </SquareSidebar>
    )
}

export default Sidebar