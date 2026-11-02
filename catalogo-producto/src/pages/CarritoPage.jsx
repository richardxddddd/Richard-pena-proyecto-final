import { useContext } from 'react'
import { CarritoContext } from '../context/CarritoContext'

function CarritoPage() {
  const { carrito, eliminar } = useContext(CarritoContext)

  return (
    <div>
      <h2>Carrito</h2>
      {carrito.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <>
          {carrito.map((item) => (
            <div key={item.id}>
              <span>{item.nombre}</span>{' '}
              <span>{item.cantidad}</span>{' '}
              <span>{item.precio}</span>{' '}
              <button onClick={() => eliminar(item.id)}>Eliminar</button>
            </div>
          ))}
          <p>
            Total: {carrito
              .reduce((suma, item) => suma + item.precio * item.cantidad, 0)
              .toFixed(2)}
          </p>
        </>
      )}
    </div>
  )
}

export default CarritoPage
