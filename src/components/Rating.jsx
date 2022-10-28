import React from 'react'
import Star from './icons/Star'

export default function Rating({ category, stars, id }) {
  return (
    <div className=' bg-secondary rounded-lg max-w-md flex flex-col justify-center items-center gap-4 py-4 px-2'>
      <ul className='flex gap-1'>
        {stars.map((star, index) => (
          <li key={index}>
            <Star />
          </li>
        ))}
      </ul>
      <p className='text-primary-dark font-bold'>
        Rated {stars.length} Stars in {category}
      </p>
    </div>
  )
}
