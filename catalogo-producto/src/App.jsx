import ListaProductos from './components/ListaProductos'
import { adaptar } from './utils/adaptar.js'
import { useEffect, useState } from 'react'
import ProductosPage from './pages/ProductosPage'

function App() {
  return (
    <div className="App">
      <h1>Catalogo de Productos</h1>
      <ProductosPage />
    </div>
  )
}

export default App