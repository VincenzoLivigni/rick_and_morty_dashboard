import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"

import Card from "./Card"

export default function CharacterList() {

    const { filteredList, loading } = useContext(GlobalContext)
    return (
        <>
            {
                loading ? (
                    <div>
                        <h2>Loading...</h2>
                    </div>
                ) : (
                    filteredList.map((c) => (

                        <Card
                            key={c.id}
                            character={c}
                        />
                    ))
                )
            }
        </>
    )
}