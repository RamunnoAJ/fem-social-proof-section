import React from 'react'

function Card({ title, subtitle, image, text, id }) {
  return (
    <div>
      <article className=' flex flex-col px-6 py-10 gap-8  bg-primary-dark max-w-[26rem] rounded-lg text-white'>
        <div className='flex justify-start items-center gap-8'>
          <img
            src={image}
            alt={`image of ${title}`}
            className='w-14 h-14 rounded-full'
          />
          <div>
            <h3 className=' font-bold text-lg tracking-wide'>{title}</h3>
            <p className='text-primary-light font-medium'>{subtitle}</p>
          </div>
        </div>
        <p className='font-medium tracking-wide'>{text}</p>
      </article>
    </div>
  )
}

export default Card
