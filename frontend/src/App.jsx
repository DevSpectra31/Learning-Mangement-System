import React from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './Pages/Students/Home'
import CoursesList from './Pages/Students/CoursesList'
import CourseDetail from './Pages/Students/CourseDetail'
import MyEnrollments from './Pages/Students/MyEnrollments'
import Player from './Pages/Students/Player'
import Loading from './Components/Students/Loading'
import Educator from './Pages/Educators/Educator'
import DashBoard from './Pages/Educators/DashBoard'
import AddCourse from './Pages/Educators/AddCourse'
import MyCourses from './Pages/Educators/MyCourses'
import StudentEnrolled from './Pages/Educators/StudentEnrolled'
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
       <Route path='/course-list/:input' element={<CoursesList/>}/>
        <Route path='/course/:id' element= {<CourseDetail/>}/>
        <Route path='/my-enrollments' element= {<MyEnrollments/>}/>
         <Route path='/player/:CourseId' element= {<Player/>}/>
         <Route path='/loading/:path' element ={<Loading/>}/>
         <Route path='/educator' element={<DashBoard/>}>
         <Route path='add-course' element={<AddCourse/>}/>
         <Route path='my-enrollments' element={<MyCourses/>}/>
         <Route path='student-enrolled' element={<StudentEnrolled/>}/>

         </Route>
      </Routes>
    </div>
  )
}

export default App