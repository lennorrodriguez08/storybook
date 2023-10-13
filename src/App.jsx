import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.min.css'
import Navbar from "./layouts/Navbar"
import Stories from "./pages/Stories"
import SignIn from "./pages/SignIn"

function App() {

  return (
    <>
      <Router>
        <ToastContainer />
        <Navbar />
        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/stories" element={<Stories />} />
            <Route path="/sign-in" element={<SignIn />} />
          </Routes>
        </main>
      </Router>
    </>
  )
}

export default App
