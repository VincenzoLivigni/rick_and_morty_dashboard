import { Link } from "react-router-dom";

export default function Card({ character }) {

    return (
        <div className="col">
            <div className="character_card">

                {/* characters image */}
                <div>
                    <Link to={`/${character.id}`}>
                        <img src={character.image} alt={character.name} className="character_image" />
                    </Link>
                </div>

                {/* characters info */}
                <div className="character_card_bottom">
                    <Link to={`/${character.id}`} className="character_link">
                        <h4 className="character_name">
                            {character.name}
                        </h4>
                    </Link>
                </div>

            </div>
        </div>
    )
}