import { useEffect, useMemo, useState } from 'react'
import { adaptar } from '../utils/adaptar.js'
import ListaProductos from '../components/ListaProductos'
import Buscador from '../components/Buscador'

function ProductosPage() {
  const [productos, setProductos] = useState([])
  const [busqueda, setBusqueda] = useState('')
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  const productosFiltrados = useMemo(() => {
    const termino = busqueda.trim().toLowerCase()
    return productos.filter((producto) =>
        producto.nombre.toLowerCase().includes(termino)
    )
  }, [productos, busqueda])

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

  return (
    <>
      <Buscador valor={busqueda} onBuscar={setBusqueda} />
      {productosFiltrados.length === 0 ? (
        <p>Sin Resultados</p>
      ) : (
        <ListaProductos productos={productosFiltrados} />
      )}
    </>
  )
}

export default ProductosPage




