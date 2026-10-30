import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <NavLink to="/" end>Inicio</NavLink>
      <NavLink to="/productos">Productos</NavLink>
      <NavLink to="/carrito">Carrito</NavLink>
    </nav>
  )
}

export default Navbar;