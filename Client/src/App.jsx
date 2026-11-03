import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Route, Routes, useLocation } from 'react-router-dom'
import Login from './pages/Login'
import Footer from './components/Footer'
import About from './pages/About'
import Register from './pages/Register'
import Course from './pages/Course'
import AdminDashboard from './pages/admin/AdminDashboard'

import AddCourse from './pages/admin/AddCourse'

export default function App() {

  const location = useLocation()
    const hideNAvbar = ['/adminDashboard','/addCourse'].includes(location.pathname)

  const hideFooter = ['/login', '/register', '/adminDashboard','/addCourse'].includes(location.pathname)

  return (
    <div>
      {!hideNAvbar && <Navbar />}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/course' element={<Course />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/adminDashboard' element={<AdminDashboard />} />
         <Route path='/addCourse' element={<AddCourse />} />
      </Routes>

      {!hideFooter && <Footer />}

   
    </div>
  )
}
