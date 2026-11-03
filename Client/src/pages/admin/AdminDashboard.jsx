
import { useState } from 'react';
import logo from '../../assets/logo.jpg';

const dashboardData = [
  {
    title: "Total Courses",
    count: 25,
    icon: "📚",
    color: "bg-blue-100",
    text: "text-blue-600",
  },
  {
    title: "Total Students",
    count: 150,
    icon: "👨‍🎓",
    color: "bg-green-100",
    text: "text-green-600",
  },
  {
    title: "Course Enrollments",
    count: 95,
    icon: "🎓",
    color: "bg-orange-100",
    text: "text-orange-600",
  },
  {
    title: "New Students",
    count: 12,
    icon: "🧑‍💻",
    color: "bg-purple-100",
    text: "text-purple-600",
  },
];

export default function AdminDashboard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
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
          Admin Dashboard
        </h1>

        <p className="text-gray-500 mb-6">
          Welcome to your admin panel
        </p>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">

          {dashboardData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-5 flex items-center justify-between hover:shadow-md transition duration-300"
            >
              <div>
                <p className="text-gray-500 text-sm font-medium">
                  {item.title}
                </p>

                <h2 className="text-3xl font-bold mt-2">
                  {item.count}
                </h2>
              </div>

              <div
                className={`${item.color} ${item.text} w-14 h-14 rounded-xl flex items-center justify-center text-2xl`}
              >
                {item.icon}
              </div>
            </div>
          ))}

        </div>
      </main>
    </div>
  );
}


