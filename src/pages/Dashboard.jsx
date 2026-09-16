import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"

import Filters from "../components/Filters"
import CharacterList from "../components/CharacterList"
import Pagination from "../components/Pagination"


export default function Dashboard() {

    const { error } = useContext(GlobalContext)

    return (
        <>
            {
                error ? (
                    <div>
                        <h2>Error loading characters</h2>
                    </div>
                ) : (
                    <div>
                        <h3>Filters</h3>
                        <Filters />

                        <h3>Characters</h3>
                        <CharacterList />

                        <Pagination />
                    </div>
                )
            }
        </>
    )
}