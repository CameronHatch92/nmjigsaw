import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './Home'
import NavBar from './NavBar'
import Events from './Events'
import Connect from './Connect'

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>
    </Router>
  )
}

export default App
