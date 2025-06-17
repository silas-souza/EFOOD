import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalCss } from './styles'
import Home from './pages/Home'
import Perfil from './pages/Perfil'

function App() {
  return (
    <>
      <GlobalCss />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfil/:id" element={<Perfil />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
