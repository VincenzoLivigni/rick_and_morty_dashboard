import { useContext, useMemo, useState } from "react"
import { GlobalContext } from "../contexts/GlobalContext"

function debounce(callback, delay) {
    let timer

    return (value) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            callback(value)
        }, delay)
    }
}

export default function Filters() {

    const { search, setSearch, sortOrder, setSortOrder, reset } = useContext(GlobalContext)

    const [inputValue, setInputValue] = useState(search)

    const debounceSetSearch = useMemo(() =>
        debounce(setSearch, 300)
        , [setSearch])

    return (
        <section className="filters">
            <div className="row row-cols-1 row-cols-md-3 g-3">

                <div className="col">
                    <label>Search character</label>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={inputValue}
                        onChange={(e) => {
                            setInputValue(e.target.value)
                            debounceSetSearch(e.target.value)
                        }}
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