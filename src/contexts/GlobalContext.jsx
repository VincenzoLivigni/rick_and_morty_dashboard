import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext()

export function GlobalProvider({ children }) {

    // stati
    const [characters, setCharacters] = useState([])

    const [search, setSearch] = useState("")
    const [sortOrder, setSortOrder] = useState("Select")

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

    const api = `https://rickandmortyapi.com/api/character?page=${currentPage}&name=${search}`

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
            setTotalPages(data.info.pages)
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
    }, [search, currentPage,])

    // filters
    const sortedList = [...characters].sort((a, b) => {
        if (sortOrder === "A-Z") return a.name.localeCompare(b.name)
        if (sortOrder === "Z-A") return b.name.localeCompare(a.name)

        return 0
    })

    // reset filters
    function reset() {
        setSearch("")
        setSortOrder("Select")
    }

    // pagination
    useEffect(() => {
        setCurrentPage(1)
    }, [search, sortOrder])

    return (
        <GlobalContext.Provider value={{
            characters,

            loading,
            error,

            sortedList,
            search,
            setSearch,
            sortOrder,
            setSortOrder,
            reset,

            currentPage,
            setCurrentPage,
            totalPages,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}