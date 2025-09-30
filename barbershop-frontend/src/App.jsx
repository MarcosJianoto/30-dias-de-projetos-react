import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalsStyles from './components/GlobalsStyles'
import styled from 'styled-components'
import Menu from './components/Menu'
import Dashboard from './pages/Dashboard';
import Products from './pages/Dashboard';
import History from './pages/Dashboard';

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
  background-color: #0A0A0A;
  align-items: center;
  margin: 0 auto;
  padding: 0;
`

function App() {

  return (
    <BrowserRouter>
      <GlobalsStyles />

      <AppContainer>
        <Menu />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/history" element={<History />} />
          <Route path="/settings" element={<History />} />
        </Routes>
      </AppContainer>

    </BrowserRouter>
  )
}

export default App
