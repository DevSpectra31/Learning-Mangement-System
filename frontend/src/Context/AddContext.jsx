/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import humanizeDuration from 'humanize-duration'
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const currency = import.meta.env.VITE_CURRENCY;
  const navigate = useNavigate()
  const [allCourses, setAllCourses] = useState([]);
  const [isEducator , setISEducator]=useState(true);

  // fetch all courses
  const fetchAllCourses = async () => {
    setAllCourses(dummyCourses);
  };
  //function to calculate avg raing
  const calculateRating = (course)=>{
    if(course.courseRatings === 0){
      return 0;
    }
    let totalRating=0;
    course.courseRatings.forEach(rating => {
      totalRating += rating.rating
    })
    return totalRating / course.courseRatings.length
  }
  //function to calculate to course chapter
  const calculatechapterTime = (ch)=>{
    let time = 0;
    ch.chapterContent.map((lecture)=>time += lecture.lectureDuration)
    return humanizeDuration(time * 60 * 1000 ,{units : ['h','m']})
  }
  //course duration 
  const calculateCourseDuration = (course)=>{
    let time = 0;
    course.courseContent.map((chapter)=>chapter.chapterContent.map(
      (lecture)=> time+= lecture.lectureDuration
    ))
    return humanizeDuration(time * 60 * 1000 , {units :['h','m']})
  }
  //no of lectures
  const calculateLectures=(course)=>{
    let totallectures=0;
    course.courseContent.forEach(chapter =>{
      if(Array.isArray(chapter.chapterContent)){
        totallectures += chapter.chapterContent.length
      }
    })
    return totallectures;
  }
  useEffect(() => {
    fetchAllCourses();
  }, []);

  const value = {
    currency,
    calculateCourseDuration,
    calculateLectures,
    calculatechapterTime,
    allCourses,
    navigate,
    calculateRating,
    isEducator,setISEducator
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};