import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { adaptar } from "../utils/adaptar";

function DetallePage() {
	const { id } = useParams();
	const { data, loading, error } = useFetch(
		`https://fakestoreapi.com/products/${id}`
	);

	if (loading) return <p>Cargando producto...</p>;
	if (error) return <p>Error al cargar el producto.</p>;

	const producto = adaptar(data);

	return (
		<main>
			<article>
				<img src={producto.imagen} alt={producto.nombre} />
				<h1>{producto.nombre}</h1>
				<p>{producto.categoria}</p>
				<p>${producto.precio.toFixed(2)}</p>
			</article>
		</main>
	);
}

export default DetallePage;
