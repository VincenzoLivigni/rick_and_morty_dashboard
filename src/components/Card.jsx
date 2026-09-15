export default function Card({ character }) {

    return (
        <>
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
        </>
    )
}