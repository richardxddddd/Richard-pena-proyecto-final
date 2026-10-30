import { useEffect, useState } from 'react'

export function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let cancelado = false;


        async function cargarProductos() {
            try {
                const res = await fetch(url)
                if (!res.ok) throw new Error('Error de red')
                const json = await res.json()
                if (!cancelado) {
                    setData(json)
                }
            } catch (err) {
                if (!cancelado) setError(err.message)
            } finally {
                if (!cancelado) setLoading(false)
            }
        }
        cargarProductos()
        return () => {
            cancelado = true
        }
    }, [url])

    return { data, loading, error }
}


