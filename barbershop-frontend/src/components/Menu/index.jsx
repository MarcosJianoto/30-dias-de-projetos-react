import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {
    Home as HomeIcon,
    History as HistoryIcon,
    Settings as SettingsIcon,
    Inventory2 as InventoryIcon,
    ContentCut as ContentCutIcon,
    Store as Store
} from "@mui/icons-material";

const ContainerSidebar = styled.div`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  height: 100%;
  width: 22%;
  background-color: #1b1b1b;
`;

const Header = styled.header`
  display: flex;
  margin: 0 auto;
  padding: 0;
  padding-bottom: 40px;
  align-items: center;
`;

const IconWolf = styled(Store)`
  background-color: #ed5f38;
  border-radius: 3px;
  margin-right: 5px;
  padding: 3px;
`;

const ContainerInternTop = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;

const ContainerInternBottom = styled.div`
  flex-shrink: 0;
  margin-bottom: 5vh;
`;

const Sidebar = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin-left: 15px;
  padding: 0;
  gap: 40px;
`;

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
        <ContainerSidebar>
            <ContainerInternTop>
                <Header>
                    <IconWolf fontSize="large" htmlColor="white" />
                    Nico's BarberShop
                </Header>

                <Sidebar>
                    <li>
                        <SidebarLink to="/" end>
                            <HomeIcon fontSize="large" /> Dashboard
                        </SidebarLink>
                    </li>
                    <li>
                        <SidebarLink to="/services">
                            <ContentCutIcon fontSize="large" /> Services
                        </SidebarLink>
                    </li>
                    <li>
                        <SidebarLink to="/products">
                            <InventoryIcon fontSize="large" /> Products
                        </SidebarLink>
                    </li>
                    <li>
                        <SidebarLink to="/history">
                            <HistoryIcon fontSize="large" /> History
                        </SidebarLink>
                    </li>
                </Sidebar>
            </ContainerInternTop>

            <ContainerInternBottom>
                <Sidebar>
                    <li>
                        <SidebarLink to="/settings">
                            <SettingsIcon fontSize="large" /> Settings
                        </SidebarLink>
                    </li>
                </Sidebar>
            </ContainerInternBottom>
        </ContainerSidebar>
    );
};

export default Menu;
