import { useMemo, useState } from 'react'
import { useFetch } from '../hooks/usefetch.js'
import { adaptar } from '../utils/adaptar.js'
import ListaProductos from '../components/ListaProductos'
import Buscador from '../components/Buscador'

function ProductosPage() {
    const [busqueda, setBusqueda] = useState('')
     const { data, loading, error } = useFetch('https://fakestoreapi.com/products')
    const productos = useMemo(() => (data ? data.map(adaptar) : []), [data])
    const productosFiltrados = useMemo(() => {
        const termino = busqueda.trim().toLowerCase()
        return productos.filter((producto) =>
            producto.nombre.toLowerCase().includes(termino)
        )
    }, [productos, busqueda])


    if (loading) return <p>Cargando…</p>
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




