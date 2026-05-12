import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Assassino from './pages/pageAssassino/Assassino.jsx'
import KratosImagem from './pages/pageKratos/KratosImagem.jsx'
import Witcher from './pages/theWitcher/Witcher'

function App() {
  return (
    <>
      <BrowserRouter>
      <h1 style={'color: white;'}> olá miguelzinn </h1>
      <Assassino />
      <KratosImagem />
      <Routes>
        {/* <Route path="/" element={<Assassino />} />
        <Route path="/kratos" element={<ImagemKratos />} />
        <Route path="/witcher" element={<Witcher />} /> */}
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App