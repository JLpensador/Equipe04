import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Assassino from './pages/pageAssassino/Assassino.jsx'
import ImagemKratos from './pages/pageKratos/imagemKratos'
import Witcher from './pages/theWitcher/Witcher'

function App() {
  return (
    <>
      <BrowserRouter>
      <h1 style={'color: white;'}> olá miguelzinn </h1>
      <Assassino />
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