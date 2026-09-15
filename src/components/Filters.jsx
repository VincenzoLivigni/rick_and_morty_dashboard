import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"

export default function Filters() {

    const { search, setSearch, sortOrder, setSortOrder, reset } = useContext(GlobalContext)

    function handleSubmit(e) {
        e.preventDefault()
    }
    return (
        <>
            <section>

                <div>
                    <label>Search character</label>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <div>
                    <label>Sort alphabetically</label>
                    <select
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                    >
                        <option value="Select">Select</option>
                        <option value="A-Z">A-Z</option>
                        <option value="Z-A">Z-A</option>
                    </select>
                </div>

                <div>
                    <button type="button" onClick={reset}>Reset</button>
                </div>

            </section>
        </>
    )
}