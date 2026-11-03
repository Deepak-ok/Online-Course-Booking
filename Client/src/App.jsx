import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Route, Routes, useLocation } from 'react-router-dom'
import Login from './pages/Login'
import Footer from './components/Footer'
import About from './pages/About'
import Register from './pages/Register'
import Course from './pages/Course'
import AddCourse from './pages/admin/AddCourse'

export default function App() {

  const location = useLocation()

  const hideFooter = ['/login', '/register', '/addCourse'].includes(location.pathname)

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/course' element={<Course />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/addCourse' element={<AddCourse />} />
      </Routes>

      {!hideFooter && <Footer />}
    </div>
  )
}
