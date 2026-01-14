import styled from "styled-components"
import GlobalsStyles from "./components/GlobalsStyles"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from "./components/Menu";
import Dashboard from "./pages/Dashboard";
import MenuTop from "./components/MenuTop";
import Vehicles from "./pages/Vehicles";
import Customers from "./pages/Customers";
import History from "./pages/History";
import Settings from "./pages/Settings";


const PageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #0D0D0D;
  padding: 1vh 1vh 1vh 0;
  gap: 1vh;
  `;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  justify-content: center;
`;


function App() {

  return (
    <BrowserRouter>
      <GlobalsStyles />
      <PageContainer>
        <Menu />
        <ContentContainer>
          <MenuTop />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/history" element={<History />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </ContentContainer>
      </PageContainer>
    </BrowserRouter>
  )
}

export default App
