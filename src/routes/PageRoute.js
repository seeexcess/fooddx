import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home, About } from "./index"

function PageRoute() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}

export default PageRoute