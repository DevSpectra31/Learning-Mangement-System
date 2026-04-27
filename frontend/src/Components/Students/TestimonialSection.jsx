import React from 'react'
import { assets, dummyTestimonial } from '../../assets/assets'

function TestimonialSection() {
  return (
    <div className='pb-14 px-4 md:px-0'>
      
      {/* Heading */}
      <h2 className='text-3xl font-medium text-gray-800 text-center'>
        Testimonials
      </h2>

      <p className='text-gray-500 mt-3 text-center max-w-3xl mx-auto'>
        Hear from our learners as they share their journeys of transformation,
        success and how our platform has made a difference in their lives.
      </p>

      {/* Testimonial Cards */}
      <div className='mt-10 space-y-6 px-4 md:px-10 lg:px-20'>
        {dummyTestimonial.map((testimonial, index) => (
          <div
            key={index}
            className='border border-gray-200 rounded-lg bg-white shadow-sm overflow-hidden'
          >
            <div className='flex flex-col md:flex-row items-start md:items-center gap-6 px-6 py-6 bg-gray-50'>

              {/* Left Side */}
              <div className='flex items-center gap-4 min-w-[250px]'>
                <img
                  className='w-14 h-14 rounded-full object-cover'
                  src={testimonial.image}
                  alt={testimonial.name}
                />

                <div>
                  <h3 className='text-lg font-semibold text-gray-800'>
                    {testimonial.name}
                  </h3>

                  <p className='text-sm text-gray-500'>
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Right Side */}
              <div className='flex-1'>

                {/* Stars */}
                <div className='flex gap-1 mb-3'>
                  {[...Array(5)].map((_, i) => (
                    <img
                      key={i}
                      className='w-5 h-5'
                      src={
                        i < Math.floor(testimonial.rating)
                          ? assets.star
                          : assets.star_blank
                      }
                      alt='star'
                    />
                  ))}
                </div>

                {/* Feedback */}
                <p className='text-sm text-gray-600 leading-relaxed'>
                  {testimonial.feedback}
                </p>

              </div>
            </div>
            <a href="#" className='text-blue-500 underline px-5'>Read More</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TestimonialSection