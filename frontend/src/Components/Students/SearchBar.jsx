import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

function SearchBar({ data }) {
  const navigate = useNavigate()
  const [input, setInput] = useState(data ? data : '')

  const onsearchandler = (e) => {
    e.preventDefault()
    navigate('/course-list?input=' + input)  // ✅ query param
  }

  return (
    <div>
      <form
        onSubmit={onsearchandler}
        className='max-w-xl w-full md:h-14 h-12 flex items-center bg-white border border-gray-500/20 rounded'
      >
        <img
          src={assets.search_icon}
          alt="search_icon"
          className='md:w-auto w-10 px-3'
        />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search for courses"
          className='w-full outline-none text-gray-700 placeholder-gray-500'
        />
        <button
          type='submit'
          className='bg-blue-600 rounded text-white md:px-10 px-7 md:py-3 mx-1'
        >
          Search
        </button>
      </form>
    </div>
  )
}

export default SearchBar