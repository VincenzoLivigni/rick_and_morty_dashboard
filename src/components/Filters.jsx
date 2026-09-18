import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"

export default function Filters() {

    const { search, setSearch, sortOrder, setSortOrder, reset } = useContext(GlobalContext)

    return (
        <section className="filters">
            <div className="row row-cols-1 row-cols-md-3 g-3">

                <div className="col">
                    <label>Search character</label>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <div className="col">
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

                <div className="col d-flex align-items-end justify-content-center">
                    <button type="button" onClick={reset}>Reset</button>
                </div>

            </div>
        </section>
    )
}