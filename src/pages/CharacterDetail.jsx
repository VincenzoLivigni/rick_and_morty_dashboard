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
            <div className="detail_container">

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
                            <div className="detail_wrapper">
                                <h3 className="section_title">Character detail</h3>
                                <div className="card_detail">

                                    {/* character image */}
                                    <div>
                                        <img src={character.image} alt={character.name} className="card_detail_image" />
                                    </div>

                                    {/* character info */}
                                    <div className="card_detail_right">
                                        <h4 className="character_name">
                                            {character.name}
                                        </h4>

                                        <p className="character_info">
                                            <strong>Status: </strong> {character.status}
                                        </p>

                                        <p className="character_info">
                                            <strong>Species: </strong> {character.species}
                                        </p>

                                        <p className="character_info">
                                            <strong>Gender: </strong> {character.gender}
                                        </p>

                                        <p className="character_info">
                                            <strong>Origin: </strong>
                                            {character.origin?.name.split("(")[0].trim() || "Not specified"}
                                        </p>

                                        <p className="character_info">
                                            <strong>Location: </strong>
                                            {character.location?.name.split("(")[0].trim() || "Not specified"}
                                        </p>
                                    </div>

                                </div>
                            </div>
                        )}

            </div>
        </>
    )
}