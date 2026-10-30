export function adaptar(producto) {
	return {
		id: producto.id,
		nombre: producto.title,
		precio: producto.price,
		imagen: producto.image,
		categoria: producto.category
	};
}
