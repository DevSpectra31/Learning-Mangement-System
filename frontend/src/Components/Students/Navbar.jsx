import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { Link, useLocation } from 'react-router-dom'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import { AppContext } from '../../Context/AddContext'

function Navbar() {
  const { navigate,isEducator } = useContext(AppContext)
  const [menuOpen, setMenuOpen] = useState(false)

  const location = useLocation()
  const isCourseListPage = location.pathname.includes('/course-list')

  const { openSignIn } = useClerk()
  const { user } = useUser()

  return (
    <nav
      className={`sticky top-0 z-50 border-b border-gray-200 shadow-sm ${
        isCourseListPage
          ? 'bg-white'
          : 'bg-gradient-to-r from-cyan-50 to-blue-50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/">
          <img
            src={assets.logo_dark}
            alt="Edemy Logo"
            className="w-28 md:w-32 cursor-pointer"
          />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6 text-gray-600 font-medium">

          {user && (
            <>
              <button onClick={()=>{navigate('/educator')}} className="hover:text-blue-600 transition">
                {isEducator ? 'Educator Dashboard' : 'Become Educator'}
              </button>

              <span className="text-gray-300">|</span>

              <Link
                to="/my-enrollments"
                className="hover:text-blue-600 transition"
              >
                My Enrollments
              </Link>
            </>
          )}

          {user ? (
            <UserButton />
          ) : (
            <button
              onClick={() => openSignIn()}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition"
            >
              Create Account
            </button>
          )}
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-3">

          {user ? (
            <UserButton />
          ) : (
            <button onClick={() => openSignIn()}>
              <img
                src={assets.user_icon}
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
            </button>
          )}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-1"
          >
            <img
              src={assets.menu_icon}
              alt="menu"
              className="w-6"
            />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 space-y-4">

          {user && (
            <>
              <button onClick={()=>{navigate('/educator')}}className="block">
                 {isEducator ? 'Educator Dashboard' : 'Become Educator'}
              </button>

              <Link to="/my-enrollments">
                My Enrollments
              </Link>
            </>
          )}

          {!user && (
            <button
              onClick={() => openSignIn()}
              className="w-full bg-blue-600 text-white py-2 rounded-full"
            >
              Create Account
            </button>
          )}
        </div>
      )}
    </nav>
  )
}

export default Navbar