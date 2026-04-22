import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../Context/AddContext'
import CoourseCard from './CoourseCard'

function CoursesSection() {
  const { allCourses } = useContext(AppContext)

  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-3xl font-semibold text-gray-800">
          Learn from the best
        </h2>

        <p className="text-sm md:text-base text-gray-500 mt-3 max-w-3xl">
          Discover our top-rated courses across various categories.
          From coding and design to business and wellness,
          our courses are crafted to deliver results.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10">
          {allCourses.slice(0, 4).map((course, index) => (
            <CoourseCard key={index} course={course} />
          ))}
        </div>

        <Link
          to="/course-list"
          onClick={() => scrollTo(0, 0)}
          className="inline-block text-gray-600 border border-gray-400 px-8 py-3 rounded-lg"
        >
          Show all courses
        </Link>

      </div>
    </section>
  )
}

export default CoursesSection