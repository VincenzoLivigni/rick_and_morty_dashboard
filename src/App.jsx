import { BrowserRouter, Route, Routes } from "react-router-dom"
import { GlobalProvider } from "./contexts/GlobalContext"
import Dashboard from "./pages/Dashboard"
import DefaultLayout from "./layouts/DefaultLayout"

function App() {

  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>

            <Route element={<DefaultLayout />} >
              <Route path="/" element={<Dashboard />} />
            </Route>

          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  )
}

export default App
