import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CarritoContext } from '../context/CarritoContext'

function Navbar() {
  const { carrito } = useContext(CarritoContext)

  return (
    <nav>
      <NavLink to="/" end>Inicio</NavLink>
      <NavLink to="/productos">Productos</NavLink>
      <NavLink to="/carrito">Carrito ({carrito.length})</NavLink>
    </nav>
  )
}

export default Navbar;

