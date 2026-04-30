import React, { useContext, useState, useRef, useEffect } from 'react'
import Navbar from '../../Components/Students/Navbar'
import { AppContext } from '../../Context/AddContext'
import { dummyCourses, assets } from '../../assets/assets'
import Footer from '../../Components/Students/Footer'

function CoursesList() {
  const { navigate } = useContext(AppContext)

  const [search, setSearch] = useState("")
  const [suggestions, setSuggestions] = useState([])
  const [showDropdown, setShowDropdown] = useState(false)
  const [category, setCategory] = useState("")

  const wrapperRef = useRef()

  // ⭐ rating calculation
  const getRating = (ratings) => {
    if (!ratings || ratings.length === 0) return 0
    const total = ratings.reduce((sum, r) => sum + r.rating, 0)
    return (total / ratings.length).toFixed(1)
  }

  // 🔍 search handler
  const handleSearch = (value) => {
    setSearch(value)

    if (value.trim() === "") {
      setSuggestions([])
      setShowDropdown(false)
      return
    }

    const filtered = dummyCourses.filter(course =>
      course.courseTitle.toLowerCase().includes(value.toLowerCase())
    )

    setSuggestions(filtered.slice(0, 5))
    setShowDropdown(true)
  }

  // ❌ close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowDropdown(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // 🎯 filter courses
  const filteredCourses = dummyCourses.filter(course => {
    return (
      course.courseTitle.toLowerCase().includes(search.toLowerCase()) &&
      (category === "" ||
        course.courseTitle.toLowerCase().includes(category.toLowerCase()))
    )
  })

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* HEADER */}
      <div className="max-w-6xl mx-auto px-4 mt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">

        {/* LEFT */}
        <div>
          <h1 className="text-3xl font-bold">Course List</h1>
          <p className="text-gray-500 mt-1">
            <span
              onClick={() => navigate('/')}
              className="text-blue-600 cursor-pointer hover:underline"
            >
              Home
            </span>{" "}
            / Course List
          </p>
        </div>

        {/* SEARCH WITH SUGGESTION */}
        <div ref={wrapperRef} className="flex w-full md:w-auto relative">

          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search for courses"
              className="px-4 py-2 border rounded-l-lg w-full focus:outline-none"
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
            />

            {/* DROPDOWN */}
            {showDropdown && suggestions.length > 0 && (
              <div className="absolute top-11 left-0 w-full bg-white border rounded-lg shadow-lg z-50">
                {suggestions.map((course) => (
                  <div
                    key={course._id}
                    onClick={() => {
                      navigate(`/course/${course._id}`)
                      setShowDropdown(false)
                    }}
                    className="flex items-center gap-3 p-2 hover:bg-gray-100 cursor-pointer"
                  >
                    <img
                      src={course.courseThumbnail}
                      className="w-12 h-8 object-cover rounded"
                      alt=""
                    />
                    <p className="text-sm">{course.courseTitle}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <button className="bg-blue-600 text-white px-5 rounded-r-lg">
            Search
          </button>
        </div>
      </div>

      {/* CATEGORY BUTTONS */}
      <div className="max-w-6xl mx-auto px-4 mt-6 flex gap-3 flex-wrap">
        {["Python", "JavaScript", "Data Science", "Cybersecurity"].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className="px-4 py-1 border rounded-full text-sm hover:bg-blue-100"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* SELECTED TAG */}
      {category && (
        <div className="max-w-6xl mx-auto px-4 mt-4">
          <span className="flex items-center gap-2 w-fit px-3 py-1 bg-gray-200 rounded-full text-sm">
            {category}
            <img
              src={assets.cross_icon}
              alt="remove"
              className="w-3 cursor-pointer"
              onClick={() => setCategory("")}
            />
          </span>
        </div>
      )}

      {/* COURSE GRID */}
      <div className="max-w-6xl mx-auto px-4 mt-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {filteredCourses.map(course => (
          <div
            key={course._id}
            className="bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer"
            onClick={() => navigate('/course-list')}
          >
            <img
              src={course.courseThumbnail}
              alt=""
              className="w-full h-40 object-cover rounded-t-lg"
            />

            <div className="p-4">
              <h2 className="font-semibold text-sm mb-2 line-clamp-2">
                {course.courseTitle}
              </h2>

              <p className="text-xs text-gray-500">by GreatStack</p>

              {/* RATING */}
              <div className="flex items-center gap-1 mt-2">
                <span className="text-yellow-500 text-sm">
                  {getRating(course.courseRatings)}
                </span>

                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <img
                      key={i}
                      src={
                        i < Math.round(getRating(course.courseRatings))
                          ? assets.star
                          : assets.star_blank
                      }
                      className="w-3"
                      alt=""
                    />
                  ))}
                </div>
              </div>

              {/* PRICE */}
              <div className="mt-2">
                <span className="font-bold text-gray-800">
                  ${course.coursePrice}
                </span>

                {course.discount > 0 && (
                  <span className="ml-2 text-xs text-green-600">
                    {course.discount}% OFF
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}

      </div>

      {/* EMPTY */}
      {filteredCourses.length === 0 && (
        <p className="text-center mt-10 text-gray-500">
          No courses found
        </p>
      )}
      <br />
      <br />
      <Footer/>
    </div>
  )
}

export default CoursesList