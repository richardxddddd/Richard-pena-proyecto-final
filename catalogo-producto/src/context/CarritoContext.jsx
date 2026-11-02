import { createContext } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

export const CarritoContext = createContext();

export function CarritoProvider({ children }) {
	const [carrito, setCarrito] = useLocalStorage('carrito', []);

	const agregar = (producto) => {
		setCarrito((prev) =>
			prev.some((item) => item.id === producto.id)
				? prev.map((item) =>
						item.id === producto.id
							? { ...item, cantidad: item.cantidad + 1 }
							: item
					)
				: [...prev, { ...producto, cantidad: 1 }]
		);
	};

	const eliminar = (id) => {
		setCarrito((prev) => prev.filter((item) => item.id !== id));
	};

	return (
		<CarritoContext.Provider value={{ carrito, agregar, eliminar }}>
			{children}
		</CarritoContext.Provider>
	);
}

