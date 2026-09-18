import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"

import Filters from "../components/Filters"
import CharacterList from "../components/CharacterList"
import Pagination from "../components/Pagination"

import jumbotron from "../assets/RM.jpg"

export default function Dashboard() {

    const { error } = useContext(GlobalContext)

    return (
        error ? (
            <div>
                <h2>Error loading characters</h2>
            </div>
        ) : (
            <>
                <div>
                    <img src={jumbotron} alt="Rick and Morty" className="jumbotron" />
                </div>

                <div className="main_container">

                    <section className="characters_list">
                        <h3 className="section_title">Filters</h3>
                        <Filters />
                    </section>

                    <section className="characters_list">
                        <Pagination />

                        <h3 className="section_title">Characters</h3>
                        <CharacterList />

                        <Pagination />
                    </section>
                </div>
            </>
        )
    )
}