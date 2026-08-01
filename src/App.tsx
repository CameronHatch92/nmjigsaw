import { HashRouter as Router, Route, Routes } from 'react-router-dom'

import Connect from './Connect'
import Events from './Events'
import Home from './Home'
import NavBar from './NavBar'

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
