import { useState, useEffect } from 'react'
import { adaptar } from '../utils/adaptar.js'
import ListaProductos from '../components/ListaProductos'


function ProductosPage() {

  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

 
  useEffect(() => {
    async function cargarProductos() {
      try {
        const res = await fetch('https://fakestoreapi.com/products')
        if (!res.ok) throw new Error('Error de red')
        const data = await res.json()
        setProductos(data.map(adaptar))
      } catch (err) {
        setError(err.message)
      } finally {
        setCargando(false)
      }
    }
    cargarProductos()
  }, [])

  
  if (cargando) return <p>Cargando…</p>
  if (error) return <p>Error: {error}</p>


  return <ListaProductos productos={productos} />
  
}

export default ProductosPage;




