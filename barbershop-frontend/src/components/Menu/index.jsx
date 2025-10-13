import styled from "styled-components"
import { NavLink } from "react-router-dom";
import { MdHome, MdHistory, MdSettings, MdAllInbox } from 'react-icons/md';
import { GiWolfHowl } from "react-icons/gi";


const ContainerSidebar = styled.div`
    font-size: 20px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    height: 100%;
    width: 22%;
    background-color: #1B1B1B;
    `
const Header = styled.header`
    display: flex;
    margin: 0 auto;
    padding: 0;
    padding-bottom: 40px;
    align-items: center;
`
const IconWolf = styled(GiWolfHowl)`
    background-color: #ED5F38;
    border-radius: 3px;
    margin-right: 5px;
`;

const ContainerInternTop = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding-top: 20px;
` ;

const ContainerInternBotoom = styled.div`
    flex-shrink: 0;
    margin-bottom: 5vh;
` ;

const Sidebar = styled.ul`
    display: flex;
    flex-direction: column;
    list-style-type: none;
    margin-left: 15px;
    padding: 0;
    gap: 40px;
`
const SidebarLink = styled(NavLink)`
    width: 95%;
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 5px 8px;
    border-radius: 5px;
    color: white;
    text-decoration: none;
    transition: 0.3s;
    
    
    &:hover{
        background-color: #282828;
        
    }
    &.active{
        color: #ED5F38;
        font-weight: bold;
        background-color: #282828;
        transform: scale(1.03);
    }
`



const Menu = () => {
    return (
        <ContainerSidebar>
            <ContainerInternTop>
                <Header>
                    <IconWolf size={30} color="white" />Nico's BarberShop
                </Header>
                <Sidebar>
                    <li>
                        <SidebarLink to="/" end>
                            <MdHome size={30} />Dashboard
                        </SidebarLink>
                    </li>
                    <li>
                        <SidebarLink to="/products">
                            <MdAllInbox size={30} />Products/Services
                        </SidebarLink>
                    </li>
                    <li>
                        <SidebarLink to="/history">
                            <MdHistory size={30} />History
                        </SidebarLink>

                    </li>
                </Sidebar>
            </ContainerInternTop>
            <ContainerInternBotoom>
                <Sidebar>
                    <li>
                        <SidebarLink to="/settings">
                            <MdSettings size={30} /> Settings
                        </SidebarLink>
                    </li>
                </Sidebar>
            </ContainerInternBotoom>
        </ContainerSidebar>
    )
}

export default Menu