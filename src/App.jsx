import Header from './components/Header'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Schedule from './pages/Schedule'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashBoard' element={<Dashboard />} />
        <Route path='/schedule' element={<Schedule />} />
      </Routes>
    </>
  )
}

export default App
