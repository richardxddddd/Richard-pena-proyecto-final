# Catálogo de Productos con Carrito

Aplicación web hecha con React y Vite para el proyecto final integrador. Muestra un catálogo de productos, permite ver el detalle de cada uno y armar un carrito de compras que se conserva al recargar la página.

**Autor:** [Richard Pena]

## Caso y API

- **Caso A (con API):** los productos vienen de una API pública.
- **API:** [FakeStoreAPI](https://fakestoreapi.com/products)
- Lo que hace el usuario (el carrito) se guarda en `localStorage`.

## Funcionalidades

- Catálogo de productos con buscador que filtra por nombre.
- Página de detalle de cada producto.
- Carrito con agregar, sumar, restar, quitar y vaciar.
- Total y cantidad de productos calculados en el carrito.
- Formulario para guardar una nota en el carrito.
- Contador de productos en la barra de navegación.
- El carrito no se pierde al recargar (`localStorage`).
- Mensajes de "Cargando…", de error y de "Sin resultados".
- Página 404 para rutas que no existen.

## Rutas

| Ruta | Página |
|---|---|
| `/` | Inicio |
| `/productos` | Catálogo con buscador |
| `/productos/:id` | Detalle de un producto |
| `/carrito` | Carrito de compras |
| `*` | Página 404 |

## Estructura del proyecto

```
src/
├── components/   Buscador, ItemCarrito, ListaProductos, Navbar, TarjetaProducto
├── context/      CarritoContext (estado global del carrito)
├── hooks/        useFetch, useLocalStorage
├── pages/        InicioPage, ProductosPage, DetallePage, CarritoPage, NotFoundPage
├── utils/        adaptar.js (convierte los datos de la API a mi formato)
└── App.jsx       Configuración de rutas
```

## Conceptos aplicados

- **Componentes y props:** componentes reutilizables y listas con `.map()` usando `key={id}`.
- **Estado y eventos:** `useState`, formulario controlado con `onSubmit` y operaciones inmutables sobre arreglos (`[...prev, x]`, `.map()`, `.filter()`).
- **Lifting state up:** el `Buscador` avisa a `ProductosPage` con `onBuscar`.
- **useEffect:** carga de datos de la API con los tres estados (cargando, error y datos) y `res.ok`.
- **Custom hooks:** `useFetch` y `useLocalStorage`.
- **useMemo:** filtro de productos y adaptación de los datos.
- **React Router:** rutas, `NavLink` con la ruta activa, ruta dinámica con `useParams` y página 404.
- **Context API:** `CarritoContext` comparte el carrito entre la barra de navegación, las tarjetas y el carrito.

## Cómo correr el proyecto

```bash
npm install
npm run dev
```

Después abre la dirección que muestra la terminal (normalmente http://localhost:5173).

## Capturas

![Catálogo](./capturas/catalogo.png)
![Carrito](./capturas/carrito.png)

## Notas

- El botón "Finalizar compra" es solo visual, no procesa pagos.
