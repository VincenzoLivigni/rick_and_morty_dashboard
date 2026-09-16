import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function CharacterDetail() {

    const { id } = useParams()

    const api = "https://rickandmortyapi.com/api/character"

    const [character, setCharacter] = useState(null)

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const fetchCharacterDetail = async () => {
        try {
            setLoading(true)
            setError(false)

            const res = await fetch(`${api}/${id}`)

            if (!res.ok) {
                throw new Error(`Errore, ${res.status}`)
            }

            const data = await res.json()

            setCharacter(data)
        }
        catch (err) {
            console.log("Errore nel recupero del dettaglio del personaggio ", err)
            setError(true)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchCharacterDetail()
    }, [id])

    return (
        <>
            <div>

                {
                    error ? (
                        <div>
                            <h2>Error loading characters</h2>
                        </div>
                    ) :
                        loading ? (
                            <div>
                                <h2>Loading...</h2>
                            </div>
                        ) : (
                            <div>

                                {/* character image */}
                                <div>
                                    <img src={character.image} alt={character.name} />
                                </div>

                                {/* character info */}
                                <div>
                                    <h3>{character.name}</h3>

                                    <p> <strong>Status:</strong> {character.status}</p>

                                    <p> <strong>Species:</strong> {character.species}</p>

                                    <p> <strong>Gender:</strong> {character.gender}</p>

                                    <p> <strong>Origin:</strong> {character.origin?.name || "Not specified"}</p>

                                    <p> <strong>Location:</strong> {character.location?.name || "Not specified"}</p>
                                </div>

                            </div>
                        )}
            </div>
        </>
    )
}