import { NavLink } from "react-router-dom";
import styled from "styled-components"

const MenuStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 15%;
    height: 100%;
    background-color: #0D0D0D;
    color: #fff;
    border-right: #474747 solid 1px ;
`

const Header = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 25px;
    text-align:center;  
    height: 10%;
`

const Sidebar = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin: 20px;
`

const SidebarLink = styled(NavLink)`
  width: 95%;
  display: flex;
  gap: 15px;
  padding: 5px 8px;
  border-radius: 5px;
  color: white;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    background-color: #282828;
  }

  &.active {
    color: #ed5f38;
    font-weight: bold;
    background-color: #282828;
    transform: scale(1.03);
  }
`;

const Menu = () => {
    return (
        <MenuStyled>
            <Header>
                Software of Manutention
            </Header>
            <Sidebar>
                <li>
                    <SidebarLink to="/" end>
                        Dashboard
                    </SidebarLink>
                </li>
                <li>
                    <SidebarLink to="/services">
                        Veículos
                    </SidebarLink>
                </li>
                <li>
                    <SidebarLink to="/products">
                        Clientes
                    </SidebarLink>
                </li>
                <li>
                    <SidebarLink to="/history">
                        Histórico
                    </SidebarLink>
                </li>
                <li>
                    <SidebarLink to="/history">
                        Configurações
                    </SidebarLink>
                </li>
            </Sidebar>
        </MenuStyled>
    )
}

export default Menu