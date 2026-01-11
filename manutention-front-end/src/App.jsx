import styled from "styled-components"
import GlobalsStyles from "./components/GlobalsStyles"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from "./components/Menu";
import Dashboard from "./components/Dashboard";
import MenuTop from "./components/MenuTop";


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
            <Route path="/vehicles" element={""} />
            <Route path="/customers" element={""} />
            <Route path="/history" element={""} />
            <Route path="/settings" element={""} />
          </Routes>
        </ContentContainer>
      </PageContainer>
    </BrowserRouter>
  )
}

export default App
