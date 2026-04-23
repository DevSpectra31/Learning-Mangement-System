import React from 'react'
import { dummyTestimonial } from '../../assets/assets'

function TestimonialSection() {
  return (
    <div className='pb-14 px-8 md:px-0'>
        <h2 className='text-3xl font-medium text-gray-800'>Testimonials</h2>
        <p className='md:text-base text-gray-500 mt-3'>Here from our learners as they share their journeys of transformation , success and how our <br />platform has made a difference in their lives</p>
        <div>
          {dummyTestimonial.map((testimonail,index)=>(
            <div key={index}>
              <div>
                <img src={testimonail.image} alt={testimonail.name} />
                <div>
                  <h1>{testimonail.name}</h1>
                  <p>{testimonail.role}</p>
                </div>
                <div>
                  <div>{[...Array(5).map(_,i)]}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default TestimonialSection