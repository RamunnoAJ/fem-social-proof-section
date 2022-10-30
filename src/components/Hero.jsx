import React from 'react'
import Cards from './Cards'
import Ratings from './Ratings'

function Hero() {
  return (
    <main className='relative'>
      <div className='absolute h-full w-full -z-10 bg-[url("./assets/bg-pattern-top-mobile.svg")] md:bg-[url("./assets/bg-pattern-top-desktop.svg")] bg-no-repeat'></div>
      <div className='absolute h-full w-full -z-10 bg-[url("./assets/bg-pattern-bottom-mobile.svg")] md:bg-[url("./assets/bg-pattern-bottom-desktop.svg")] bg-no-repeat bg-right-bottom overflow-visible'></div>
      <div className='h-screen grid'>
        <div className='flex flex-col justify-center items-center h-screen md:h-full'>
          <div className='flex flex-col md:flex-row mx-auto w-11/12 max-w-7xl gap-4 my-4 '>
            <div className='basis-1/2 flex flex-col justify-center items-center gap-4'>
              <h1 className='text-primary-dark font-bold font text-5xl text-center md:text-left font-primary w-full'>
                10,000+ of our <br /> users love our <br /> products
              </h1>
              <p className=' text-gray-500 text-center md:text-left font-primary text-xl w-full'>
                We only provide great products combined with excellent
                <br className='hidden md:block' />
                customer service. See what our satisfied customers are
                <br className='hidden md:block' />
                saying about our services.
              </p>
            </div>
            <div className='basis-1/2'>
              <Ratings />
            </div>
          </div>
        </div>

        <div className='mx-auto my-4 w-11/12 max-w-7xl md:mt-16'>
          <Cards />
        </div>
      </div>
    </main>
  )
}

export default Hero
