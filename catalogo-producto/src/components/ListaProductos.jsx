import TarjetaProducto from "./TarjetaProducto";

function ListaProductos({ productos }) {
    return (
        <div className="lista-productos">
            {productos.map((producto) => (
                <TarjetaProducto
                    key={producto.id}
                    nombre={producto.nombre}
                    precio={producto.precio}
                    imagen={producto.imagen}
                    categoria={producto.categoria}
                />
            ))}
        </div>
    );
}   

export default ListaProductos;

