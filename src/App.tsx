import { Route, Routes } from 'react-router'
import './App.css'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import Companies from './Pages/Companies'

function App() {

  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/companies' element={<Companies />} />
    </Routes>
  )
}

export default App
