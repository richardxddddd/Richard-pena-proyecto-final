import { Routes, Route } from 'react-router-dom'
import InicioPage from './pages/InicioPage'
import ProductosPage from './pages/ProductosPage'
import CarritoPage from './pages/CarritoPage'
import NotFoundPage from './pages/NotFoundPage'
import Navbar from './components/Navbar'






function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<InicioPage />} />
        <Route path="/productos" element={<ProductosPage />} />
        <Route path="/carrito" element={<CarritoPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App


        