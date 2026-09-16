import { BrowserRouter, Route, Routes } from "react-router-dom"
import { GlobalProvider } from "./contexts/GlobalContext"
import Dashboard from "./pages/Dashboard"
import DefaultLayout from "./layouts/DefaultLayout"
import CharacterDetail from "./pages/CharacterDetail"

function App() {

  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>

            <Route element={<DefaultLayout />} >
              <Route path="/" element={<Dashboard />} />
              <Route path="/:id" element={<CharacterDetail />} />
            </Route>

          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  )
}

export default App
