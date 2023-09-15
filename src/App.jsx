import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from './pages/Dashboard'
import login from "./pages/Login"
import Register from "./pages/Register"
import Header from "./components/Header"

function App() {

  return (
    <>
      <Router>
        <div className="container"></div>
        <Routes>
          <Route path="/" element = {<Dashboard/>}/>
          <Route path="/Login" element = {<Login/>}/>
          <Route path="/Register" element = {<Register/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
