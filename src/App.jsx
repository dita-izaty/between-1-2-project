import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import TalkthatTalk from './components/TalkthatTalk'
import Twiceland from './components/Twiceland'
import Footer from './components/Footer'
import ErrorPage from './components/ErrorPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/between1and2" element={<Home />} />
        <Route path="/talkthattalk" element={<TalkthatTalk />} />
        <Route path="/twiceland" element={<Twiceland />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App