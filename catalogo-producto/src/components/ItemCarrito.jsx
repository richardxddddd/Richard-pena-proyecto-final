function ItemCarrito({ item, onSumar, onRestar, onEliminar }) {
	return (
		<div className="carrito-linea">
			<img className="carrito-linea__imagen" src={item.imagen} alt={item.nombre} />
			<div>
				<h3 className="carrito-linea__nombre">{item.nombre}</h3>
				<p className="carrito-linea__unitario">${item.precio.toFixed(2)}</p>
			</div>

			<div className="carrito-linea__cantidad">
				<button type="button" onClick={() => onRestar(item.id)} aria-label="Restar cantidad">
					−
				</button>
				<span>{item.cantidad}</span>
				<button type="button" onClick={() => onSumar(item.id)} aria-label="Sumar cantidad">
					+
				</button>
			</div>

			<div className="carrito-linea__subtotal">
				<span>${(item.precio * item.cantidad).toFixed(2)}</span>
				<button className="carrito-linea__quitar" type="button" onClick={() => onEliminar(item.id)}>
					Quitar
				</button>
			</div>
		</div>
	);
}

export default ItemCarrito;

