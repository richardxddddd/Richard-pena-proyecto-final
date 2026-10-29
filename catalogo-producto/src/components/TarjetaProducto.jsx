function TarjetaProducto( {nombre, precio, imagen, categoria }) {
   return (
    <><article className="tarjeta-producto">
           <img src={imagen} alt={nombre} className="tarjeta-producto__imagen" />
           <div className="tarjeta-producto__contenido">
               <p className="tarjeta-producto__categoria">{categoria}</p>
               <h2 className="tarjeta-producto__nombre">{nombre}</h2>
              <p className="tarjeta-producto__precio">${precio.toFixed(2)}</p>      
           </div>
       </article><button className="tarjeta-producto__boton">Agregar</button>
      
       </>
      
   );   
}

export default TarjetaProducto;

