import React from 'react'
import { assets } from '../../assets/assets'

function CalltoAction() {
  return (
<div className="py-20 flex flex-col items-center justify-center text-center px-6">

  <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
    Learn anything, anytime, anywhere
  </h1>

  <p className="mt-5 text-gray-500 text-sm md:text-base max-w-3xl leading-relaxed">
    Incididunt sint fugiat pariatur cupidatat consectetur sit cillum
    anim id veniam aliqua proident excepteur commodo do ea.
  </p>

  <div className="mt-8 flex items-center gap-6 flex-wrap justify-center">

    <button className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
      Get started
    </button>

    <button className="flex items-center gap-2 text-gray-800 font-medium hover:text-black transition duration-300">
      Learn more
      <span className="text-xl">→</span>
    </button>

  </div>

</div>
  )
}

export default CalltoAction