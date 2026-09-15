import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
import Filters from "../components/Filters"

export default function Dashboard() {

    const { filteredList, loading, error } = useContext(GlobalContext)

    return (
        <>
            {/* error state */}
            {
                error && (
                    <div>
                        <h2>Error loading characters</h2>
                    </div>
                )
            }

            {/* loading state */}
            {
                loading && (
                    <div>
                        <h2>Loading...</h2>
                    </div>
                )
            }

            {/* filters */}
            <h3>Filters</h3>
            <Filters />

            {/* characters list */}
            <h3>Characters</h3>
            <div>
                {
                    filteredList.map((c) => (
                        // card
                        <div key={c.id}>

                            {/* character image */}
                            <div>
                                <img src={c.image} alt={c.name} />
                            </div>

                            {/* character info */}
                            <div>
                                <h3>{c.name}</h3>

                                <p> <strong>Status:</strong> {c.status}</p>

                                <p> <strong>Species:</strong> {c.species}</p>

                                <p> <strong>Gender:</strong> {c.gender}</p>

                                <p> <strong>Origin:</strong> {c.origin?.name || "Not specified"}</p>

                                <p> <strong>Location:</strong> {c.location?.name || "Not specified"}</p>
                            </div>
                        </div>
                    ))
                }

            </div>
        </>
    )
}