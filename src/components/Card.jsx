import React from 'react'

function Card({ title, subtitle, image, text, id }) {
  return (
    <div>
      <article className=' flex flex-col px-6 py-10 gap-8  bg-primary-dark max-w-sm rounded-lg text-white'>
        <div className='flex justify-start items-center gap-8'>
          <img src={image} alt='' className='w-16 h-16 rounded-full' />
          <div>
            <p className=' font-bold text-lg tracking-wide'>{title}</p>
            <p className='text-primary-light font-medium'>{subtitle}</p>
          </div>
        </div>
        <p className='font-medium tracking-wide'>{text}</p>
      </article>
    </div>
  )
}

export default Card
