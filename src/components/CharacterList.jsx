import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"

import Card from "./Card"

export default function CharacterList() {

    const { sortedList, loading } = useContext(GlobalContext)
    return (
        loading ? (
            <div className="no_results">
                <h2>Loading...</h2>
            </div>
        ) : (
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-4 g-4">
                {sortedList.map((c) => (

                    <Card
                        key={c.id}
                        character={c}
                    />
                ))}

            </div>
        )
    )
}