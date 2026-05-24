import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

function App() {
  return (


    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
