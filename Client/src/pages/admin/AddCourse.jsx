import logo from "../../assets/logo.jpg"
import  { useState } from 'react'


export default function AddCourse() {
     const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="min-h-screen md:flex bg-gray-100 ">
    
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden fixed top-4 left-4 z-50 bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            {isOpen ? "✕ Close" : "☰ Menu"}
          </button>
    
          {/* Mobile Overlay */}
          {isOpen && (
            <div
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 z-30 md:hidden"
            />
          )}
    
          {/* Sidebar */}
          <aside
            className={`
              fixed top-0 left-0 z-40
              h-screen w-64 bg-blue-400
              transition-transform duration-300
              ${isOpen ? "translate-x-0" : "-translate-x-full"}
              md:sticky md:top-0 md:translate-x-0
              md:flex-shrink-0
            `}
          >
            {/* Logo */}
            <div className="flex justify-center items-center p-4">
              <img
                src={logo}
                alt="logo"
                className="rounded-full w-28 h-28 object-cover"
              />
            </div>
    
            {/* Sidebar Menu */}
            <ul className="p-5 space-y-5 text-white font-semibold">
            <li className="cursor-pointer hover:text-blue-900">
           <a href="/adminDashboard"> Dashboard</a>
          </li>
          <li className="cursor-pointer hover:text-blue-900">
           <a href="/addCourse">Add Course</a>
          </li>
              <li className="cursor-pointer hover:text-blue-900">
               <a href="/manageCourse"> Manage Courses</a>
              </li>
              <li className="cursor-pointer hover:text-blue-900">
                <a href="/manageStudent">Manage Students</a>
              </li>
              <li className="cursor-pointer hover:text-blue-900">
               <a href="/logOut"> Log Out</a>
              </li>
            </ul>
          </aside>
    
          {/* Dashboard Content */}
          <main className="flex-1 min-w-0 w-full p-4 pt-20 sm:p-6 sm:pt-20 md:p-8 ">
    
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">
             Add Courses 
            </h1>
            
             <form action="" className=" flex flex-col gap-2 w-70 sm:w-auto md:w-full">
              <label htmlFor="name">Course Name</label>
                 {/* <input type="text" id="courseName"  name="courseName"  value={courseName}  onChange={(e) => setCourseName(e.target.value)} placeholder="Enter Course Name" required className="border p-2 rounded-lg" /> */}
              <input type="text" id="name" placeholder="add Course name"  className="border p-2 rounded-lg "/>

              <label htmlFor="courseTitle">Course Title</label>
                 <input type="text" id="courseTitle" placeholder="add Course Title"  className="border p-2 rounded-lg "/>
             </form>
          
           
          </main>
        </div>
    </>
  )
}
