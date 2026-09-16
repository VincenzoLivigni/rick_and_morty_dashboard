import { Link } from "react-router-dom";

export default function Card({ character }) {

    return (
        <>
            <div>


                {/* characters image */}
                <div>
                    <Link to={`/${character.id}`}>
                        <img src={character.image} alt={character.name} />
                    </Link>
                </div>

                {/* characters info */}
                <div>
                    <Link to={`/${character.id}`}>
                        <h3>{character.name}</h3>
                    </Link>

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