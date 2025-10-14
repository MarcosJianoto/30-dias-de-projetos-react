import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalsStyles from './components/GlobalsStyles'
import styled, { ThemeProvider as StyledThemeProvider } from 'styled-components'
import Menu from './components/Menu'
import Dashboard from './pages/Dashboard';
import History from './pages/History';
import Services from './pages/Services';
import Products from './pages/Products';
import Settings from './pages/Settings';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


// Container geral da página
const PageContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #0A0A0A;
  padding: 20px;
  `;

// Container do conteúdo principal (Dashboard, Products, etc.)
const ContentContainer = styled.div`
  flex: 1; // ocupa todo espaço restante
  display: flex;
  flex-direction: column;
  padding: 0 0 0 20px;
  overflow-y: auto; // scroll apenas no conteúdo se necessário
`;

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <GlobalsStyles />

        <PageContainer>
          <Menu />
          <ContentContainer>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/history" element={<History />} />
              <Route path="/services" element={<Services />} />
              <Route path="/Products" element={<Products />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </ContentContainer>
        </PageContainer>

      </BrowserRouter>
    </ThemeProvider>

  )
}

export default App
