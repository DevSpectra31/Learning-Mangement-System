import React from 'react'
import { assets } from '../../assets/assets'

function Companies() {
  return (
    <section className="w-full py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <p className="text-base md:text-lg text-gray-500 font-medium">
          Trusted by learners from
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-8 md:gap-12">

          <img
            src={assets.microsoft_logo}
            alt="Microsoft"
            className="h-6 md:h-8 object-contain"
          />

          <img
            src={assets.accenture_logo}
            alt="Accenture"
            className="h-6 md:h-8 object-contain"
          />

          <img
            src={assets.adobe_logo}
            alt="Adobe"
            className="h-6 md:h-8 object-contain"
          />

          <img
            src={assets.paypal_logo}
            alt="PayPal"
            className="h-6 md:h-8 object-contain"
          />

          <img
            src={assets.walmart_logo}
            alt="Walmart"
            className="h-6 md:h-8 object-contain"
          />

        </div>
      </div>
    </section>
  )
}

export default Companies