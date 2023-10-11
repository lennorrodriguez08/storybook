import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./layouts/Navbar"
import Stories from "./pages/Stories"
import Login from "./pages/Login"

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/stories" element={<Stories />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </Router>
    </>
  )
}

export default App
