function Buscador({ valor, onBuscar }) {
	return (
		<input
			type="text"
			placeholder="Buscar producto"
			value={valor}
			onChange={(e) => onBuscar(e.target.value)}
		/>
	);
}

export default Buscador;
