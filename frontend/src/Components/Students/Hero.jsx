import React from 'react'
import { assets } from '../../assets/assets'
import SearchBar from './SearchBar'

function Hero() {
  return (
    <section className="w-full bg-gradient-to-b from-cyan-100/70 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">

        <div className="text-center max-w-4xl mx-auto">

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
            Empower your future with the courses designed to{" "}
            <span className="text-blue-600">
              fit your choice
            </span>
          </h1>

          <p className="mt-6 text-gray-700 text-base md:text-lg leading-relaxed">
            We bring together world-class instructors, interactive content,
            and a supportive community to help you achieve your personal
            and professional goals.
          </p>

          <p className="md:hidden mt-4 text-gray-500 max-w-sm mx-auto">
            Learn from top instructors and grow your professional skills.
          </p>

          <div className="mt-8">
            <SearchBar />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero