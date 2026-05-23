import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { AppContext } from '../../Context/AddContext'
import SearchBar from '../../Components/Students/SearchBar'
import { useSearchParams } from 'react-router-dom'   // ✅ changed
import CoourseCard from '../../Components/Students/CoourseCard'
import { assets } from '../../assets/assets'
import Footer from "../../Components/Students/Footer"
import Navbar from '../../Components/Students/Navbar'
function CoursesList() {
  const { navigate, allCourses } = useContext(AppContext)
  const [searchParams] = useSearchParams()           // ✅ changed
  const input = searchParams.get('input')            // ✅ changed
  const [filteredCourse, setFilteredCourse] = useState([])

  useEffect(() => {
    if (allCourses && allCourses.length > 0) {
      const tempcourses = allCourses.slice()
      input
        ? setFilteredCourse(
            tempcourses.filter(item =>
              item.courseTitle.toLowerCase().includes(input.toLowerCase()) // ✅ verify this field name
            )
          )
        : setFilteredCourse(tempcourses)
    }
  }, [allCourses, input])

  return (
    <>
    <Navbar/>
      <div className='relative md:px-36 px-8 pt-20 text-left'>
        <div className='flex md:flex-row flex-col gap-6 items-start justify-between w-full'>
          <div>
            <h1 className='text-4xl font-semibold text-gray-800'>Course List</h1>
            <p className='text-gray-500'>
              <span className='text-blue-600 cursor-pointer' onClick={() => navigate('/')}>Home</span>
              {' / '}
              <span>Course List</span>
            </p>
          </div>
          <SearchBar data={input} />
        </div>
        {
          input && <div clasName='inline-flex items-center gap-4 px-4 py-2 border mt-8-mb-8 text-gray-600'>
            <p>{input}</p>
            <img src={assets.cross_icon} alt='' className = 'cursor-pointer' onclick ={()=>navigate('/course-list')}/>
          </div>
        }
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8'>
          {filteredCourse.map((course, index) => (
            <CoourseCard key={index} course={course} />
          ))}
        </div>
      </div>
      <br></br>
      <Footer/>
    </>
  )
}

export default CoursesList