import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"

export default function Pagination() {

    const { currentPage, setCurrentPage, totalPages } = useContext(GlobalContext)

    function prev() {
        setCurrentPage((p) => Math.max(p - 1, 1))
    }

    function next() {
        setCurrentPage((p) => Math.min(p + 1, totalPages))
    }

    return (
        <>
            <div className="pagination">
                <button onClick={prev} disabled={currentPage === 1}>
                    Prev
                </button>

                <span className="pages">
                    <strong>{currentPage}</strong> / <strong>{totalPages}</strong>
                </span>

                <button onClick={next} disabled={currentPage === totalPages}>Next</button>
            </div>
        </>
    )
}