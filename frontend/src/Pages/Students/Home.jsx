import React from 'react'
import Navbar from '../../Components/Students/Navbar';
import Hero from '../../Components/Students/Hero';
import Companies from '../../Components/Students/Companies';
import CoursesSection from '../../Components/Students/CoursesSection';
import Footer from '../../Components/Students/Footer';
import TestimonialSection from '../../Components/Students/TestimonialSection';
import CalltoAction from '../../Components/Students/CalltoAction';

function Home() {
  return (
    <div className="w-full min-h-screen">
      <Navbar />

      <div className="w-full space-y-12">
        <Hero />
        <Companies />
        <CoursesSection />
        <TestimonialSection/>
        <CalltoAction/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home;