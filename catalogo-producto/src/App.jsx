import './App.css'
import ListaProductos from './components/ListaProductos'

// Datos 
const PRODUCTOS_PRUEBA = [
  {
    id: 1,
    nombre: 'Zapatillas Running Pro',
    precio: 89.99,
    imagen: 'https://picsum.photos/seed/1/300/200',
    categoria: 'calzado'
  },
  {
    id: 2,
    nombre: 'Mochila Impermeable Urbana',
    precio: 45.5,
    imagen: 'https://picsum.photos/seed/2/300/200',
    categoria: 'accesorios'
  },
  {
    id: 3,
    nombre: 'Auriculares Inalámbricos ANC',
    precio: 120,
    imagen: 'https://picsum.photos/seed/3/300/200',
    categoria: 'electronica'
  },
  {
    id: 4,
    nombre: 'Camiseta Algodón Organic',
    precio: 25,
    imagen: 'https://picsum.photos/seed/4/300/200',
    categoria: 'ropa'
  }
]

function App() {
  return (
    <div className="App">
      <h1>Catalogo de Productos</h1>
      <ListaProductos productos={PRODUCTOS_PRUEBA} />
    </div>
  )
}

export default App