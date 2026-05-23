import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets } from '../../assets/assets'
import { AppContext } from '../../Context/AddContext'
import Loading from "../../Components/Students/Loading"
import Navbar from "../../Components/Students/Navbar"
import humanizeDuration from 'humanize-duration'
function CourseDetail() {
  const { id } = useParams()
  const [courseData, setCourseData] = useState(null)  // ✅ null not []
  const { allCourses,calculateRating,  calculateCourseDuration,
    calculateLectures,
    calculatechapterTime } = useContext(AppContext)

  useEffect(() => {
    const fetchCourseData = async () => {
      const selectedCourse = allCourses.find(course => course._id === id)
      setCourseData(selectedCourse)
    }
    fetchCourseData()   // ✅ call it
  }, [allCourses])      // ✅ correct deps

  if (!courseData) return <Loading />   // ✅ fixed typo Loadig → Loading

  return (
    <>
      <div>
        {/* Navbar remove if using Layout wrapper */}
        <Navbar/>
        <div className='relative flex md:flex-row flex-col-reverse gap-10 items-start justify-between md:px-36 px-8 md:pt-30 pt-20 text-left'>

          <div className='absolute top-0 left-0 w-full h-section-height -z-10 bg-gradient-to-b from-cyan-100/70 to-white'></div>

          {/* left column */}
          <div className='max-w-xl z-10 text-gray-500'>
            <h1 className='md:text-course-details-heading-large text-course-details-heading-small font-semibold text-gray-800'>{courseData.courseTitle}</h1>

            <p dangerouslySetInnerHTML={{ __html: courseData.courseDescription?.slice(0, 200) }} />

            {/* review and rating */}
           
                   <div className="flex items-center space-x-2 pt-3 pb-1 text-sm">
                     <p className="font-medium text-sm">{calculateRating(courseData)}</p>
           
                     <div className="flex">
                       {[...Array(5)].map((_, i) => (
                         <img
                           key={i}
                           src={i < Math.floor(calculateRating(courseData))?assets.star : assets.star_blank}
                           alt="star"
                           className="w-4 h-4"
                         />
                       ))}
                     </div>
           
                     <p className="text-blue-600">{courseData.courseRatings.length} {courseData.courseRatings.length > 1 ? 'ratings' : 'rating'}</p>
                     <p>{courseData.enrolledStudents.length} {courseData.enrolledStudents.length > 1 ? 'students' : 'student'}</p>
                   </div>
                   <p>Course by <span className='text-blue-600 underline'>Tanstack</span></p> 
                   <div className='pt-8 text-gray-800'>
                    <h2 className='text-xl font-semibold'>Course Structure</h2>
                    <div className='pt-5'>
                      {courseData.courseContent.map((chapter, index) => (
                        <div className='border border-gray-300 bg-white mb-2 rounded' key={index}>
                          <div className='flex items-center justify-between px-4 py-3 cursor-pointer select-none'>
                            <div className='flex items-center gap-2'>
                            <img src={assets.down_arrow_icon} alt='arrow icon' />
                            <p className='font-medium md:text--base text-sm'>{chapter.chapterTitle}</p>
                          </div>
                          <p className='text-sm md:text-default'>{chapter.chapterContent.length}lectures - {calculatechapterTime(chapter)}</p>
                        </div>
                        <div className='overflow-hidden transition-all duration-300 max-h-96'>
                          <ul className='list-disc md:pl-10 pl-4 pr-4 py-2 text-gray-600 border-t border-gray-300'>
                            {chapter.chapterContent.map((lecture,index)=>(
                              <li  className='flex items-start gap-2 py-1'key={index}>
                                <img src={assets.play_icon} alt='play icon' className='w-4 h-4 mt-1'/>
                                <div className='flex items-center justify-between w-full text-gray-800 text-xs md:text-default'>
                                  <p>{lecture.lectureTitle}</p>
                                  <div className='flex gap-2 '>
                                    {lecture.isPreviewFree && <p className='text-blue-500 cursor-pointer'>Preview</p>}
                                    <p>{humanizeDuration(lecture.lectureDurtion *60 *1000,{units : ['h','m']})}</p>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* right column */}
                <div className='w-80 bg-white p-4 rounded-md shadow-sm'>
                  {/* placeholder for course card/actions */}
                  <p className='font-semibold text-lg text-gray-800'>{courseData.price ? `₹${courseData.price}` : 'Free'}</p>
                </div>
              </div>
            </div>
          </>
  )
}

export default CourseDetail