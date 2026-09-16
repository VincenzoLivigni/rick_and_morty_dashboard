import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"

import Card from "./Card"

export default function CharacterList() {

    const { sortedList, loading } = useContext(GlobalContext)
    return (
        <>
            {
                loading ? (
                    <div>
                        <h2>Loading...</h2>
                    </div>
                ) : (
                    sortedList.map((c) => (

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