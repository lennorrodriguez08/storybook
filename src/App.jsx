import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./layouts/Navbar"
import Stories from "./pages/Stories"

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route 
            path="/stories" 
            element={<Stories />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
