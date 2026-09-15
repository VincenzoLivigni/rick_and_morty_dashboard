import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext()

export function GlobalProvider({ children }) {

    const api = "https://rickandmortyapi.com/api/character"

    // stati
    const [characters, setCharacters] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    // recupero dati
    const fetchCharacters = async () => {
        try {
            setLoading(true)
            setError(false)

            const res = await fetch(api)

            if (!res.ok) {
                throw new Error(`Errore, ${res.status}`)
            }

            const data = await res.json()

            setCharacters(data.results)

        }
        catch (err) {
            console.log("Errore nel recupero dei dati ", err)
            setError(true)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchCharacters()
    }, [])

    return (
        <GlobalContext.Provider value={{ characters, loading, error }}>
            {children}
        </GlobalContext.Provider>
    )
}