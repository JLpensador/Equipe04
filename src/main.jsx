import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import imagemKratos from './pages/pageKratos/imagemKratos.jsx'
import Header from './components/Header/header.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>olá digital</h1>
    <Header />
    <App />
    {/* <imagemKratos /> */}
  </StrictMode>,
)
