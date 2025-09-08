import { Route, Routes } from 'react-router'
import './App.css'
import Companies from './Pages/Companies'
import Dashboard from './Pages/Dashboard'
import Login from './Pages/Login'
import Layout from './components/layout/layout'

function App() {

  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route element={<Layout />}>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/companies' element={<Companies />} />
      </Route>
    </Routes>
  )
}

export default App
