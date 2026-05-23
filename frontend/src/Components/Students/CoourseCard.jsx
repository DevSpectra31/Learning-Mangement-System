import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { AppContext } from '../../Context/AddContext'
import { Link } from 'react-router-dom'

function CourseCard({ course }) {
  const { currency ,calculateRating} = useContext(AppContext)

  const finalPrice =
    course.coursePrice -
    (course.discount * course.coursePrice) / 100

  return (
    <Link
      to={'/course/' + course._id}
      onClick={() => scrollTo(0, 0)}
      className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-300 bg-white"
    >
      <img
        className="w-full h-48 object-cover"
        src={course.courseThumbnail}
        alt={course.courseTitle}
      />

      <div className="p-4">

        <h3 className="text-base font-semibold text-gray-800 line-clamp-2">
          {course.courseTitle}
        </h3>

        <p className="text-sm text-gray-500 mt-2">
          {course.educator.name}
        </p>

        <div className="flex items-center gap-2 mt-3">
          <p className="font-medium text-sm">{calculateRating(course)}</p>

          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src={i < Math.floor(calculateRating(course))?assets.star : assets.star_blank}
                alt="star"
                className="w-4 h-4"
              />
            ))}
          </div>

          <p className="text-sm text-gray-500">{course.courseRatings.length}</p>
        </div>

        <p className="text-lg font-bold text-gray-800 mt-4">
          {currency}
          {finalPrice.toFixed(2)}
        </p>

      </div>
    </Link>
  )
}

export default CourseCard