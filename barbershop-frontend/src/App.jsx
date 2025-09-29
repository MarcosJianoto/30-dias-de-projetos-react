import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalsStyles from './components/GlobalsStyles'
import styled from 'styled-components'
import Menu from './components/Menu'
import Dashboard from './pages/Dashboard';
import Products from './pages/Dashboard';
import History from './pages/Dashboard';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #0A0A0A;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2vw;
`

function App() {
  const [count, setCount] = useState(0)

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
