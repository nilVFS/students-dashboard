import Header from './components/Header'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/DashBoard' element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
