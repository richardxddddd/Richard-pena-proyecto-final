import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../context/CarritoContext';

function TarjetaProducto({ id, nombre, precio, imagen, categoria }) {
    const { agregar } = useContext(CarritoContext);
   return (
    <article className="tarjeta-producto">
           <img src={imagen} alt={nombre} className="tarjeta-producto__imagen" />
           <div className="tarjeta-producto__contenido">
               <p className="tarjeta-producto__categoria">{categoria}</p>
               <h2 className="tarjeta-producto__nombre">{nombre}</h2>
              <p className="tarjeta-producto__precio">${precio.toFixed(2)}</p>      
           </div>
           <Link to={`/productos/${id}`}>Ver detalle</Link>
   <button className="tarjeta-producto__boton" onClick={() => agregar({ id, nombre, precio, imagen })}>Agregar</button>
       </article>
       
      
   );   
}

export default TarjetaProducto;

