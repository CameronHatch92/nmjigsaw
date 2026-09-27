import { HashRouter as Router, Route, Routes } from 'react-router-dom'

import Connect from './Connect'
import NovHalloween2026 from './CurrentEvents/NovHalloween2026'
import OctWooden2026 from './CurrentEvents/OctWooden2026'
import Events from './Events'
import Home from './Home'
import NavBar from './NavBar'
import PastEvent from './PastEvent'
import PastEvents from './PastEvents'

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/past_events" element={<PastEvents />} />
        <Route
          path="/events/nov_halloween_2026"
          element={<NovHalloween2026 />}
        />
        <Route path="/events/oct_wooden_2026" element={<OctWooden2026 />} />
        <Route path="/events/:id" element={<PastEvent />} />
      </Routes>
    </Router>
  )
}

export default App
