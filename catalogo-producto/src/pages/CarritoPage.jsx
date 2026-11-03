import { useContext, useState } from 'react'
import { CarritoContext } from '../context/CarritoContext'
import ItemCarrito from '../components/ItemCarrito'

function CarritoPage() {
  const { carrito, eliminar, restar, sumar, vaciar } = useContext(CarritoContext)
  const [nota, setNota] = useState('')
  const [notaGuardada, setNotaGuardada] = useState('')
  const totalItems = carrito.reduce((suma, item) => suma + item.cantidad, 0)
  const total = carrito.reduce((suma, item) => suma + item.precio * item.cantidad, 0)

  function manejarEnvio(e) {
    e.preventDefault()
    const notaLimpia = nota.trim()
    if (!notaLimpia) return

    setNotaGuardada(notaLimpia)
    setNota('')
  }

  if (carrito.length === 0) {
    return <p className="carrito-vacio">Tu carrito está vacío</p>
  }

  return (
    <>
      <h1>Carrito</h1>
      <div className="carrito">
        <div className="carrito__lista">
          {carrito.map((item) => (
            <ItemCarrito
              key={item.id}
              item={item}
              onRestar={restar}
              onSumar={sumar}
              onEliminar={eliminar}
            /> 
          ))}
        </div>

        <aside className="carrito-resumen">
          <div className="carrito-resumen__fila">
            <span>Productos</span>
            <span>{totalItems}</span>
          </div>
          <div className="carrito-resumen__total">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button className="carrito-resumen__boton">Finalizar compra</button>
          <button className="carrito-resumen__vaciar" onClick={vaciar}>
            Vaciar carrito
          </button>
          <form onSubmit={manejarEnvio}>
            <input
              type="text"
              placeholder="Nota para tu pedido"
              value={nota}
              onChange={(e) => setNota(e.target.value)}
            />
            <button type="submit">Guardar nota</button>
          </form>
          {notaGuardada ? <p>{notaGuardada}</p> : null}
        </aside>
      </div>
    </>
  )
}

export default CarritoPage
