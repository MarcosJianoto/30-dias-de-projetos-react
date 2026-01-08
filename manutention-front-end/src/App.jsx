import styled from "styled-components"
import GlobalsStyles from "./components/GlobalsStyles"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from "./components/Menu";
import Dashboard from "./components/Dashboard";


const PageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #0D0D0D;
  padding: 3vh 3vh 3vh 0;
  gap: 3vh;
  `;

const ContentContainer = styled.div`
  flex: 1; // ocupa todo espaço restante
  display: flex;
  flex-direction: column;
  overflow-y: auto; // scroll apenas no conteúdo se necessário
`;


function App() {

  return (
    <BrowserRouter>
      <GlobalsStyles />
      <PageContainer>
        <Menu />
        <ContentContainer>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/history" element={""} />
            <Route path="/services" element={""} />
            <Route path="/Products" element={""} />
            <Route path="/settings" element={""} />
          </Routes>
        </ContentContainer>
      </PageContainer>
    </BrowserRouter>
  )
}

export default App
