import React from 'react'
import hero from '../images/hero.jpg'
import heroshape from '../images/hero-shape.svg'
const Home = () => {
  return (
    <>
    <section className='relative bg-deepBlue'>
      <div className='w-10/12 max-w-[1080px] flex sm:flex-col lg:flex-row  justify-between items-center mx-auto'>
        <div className='text-white font-mullish space-y-8' >
          <h1 className='bold text-[40px] leading-[1.2]'>Power your finance, grow your business</h1>
          <div className='w-20 h-1 bg-greenLight'></div>
          <p className='text-[18px] leading-7 opacity-70'>Accept payments from customers. Automate payouts to vendors &
          employees. Never run out of working capital.</p>
          <button className='bg-lightBlue py-[14px] px-[18px] rounded-md font-bold
          hover:bg-lightBlue500 hover:scale-150 transition-all duration-1000 '>Sign Up Now</button>
        </div>
        <img 
        src={hero}
        className='w-full max-w-[680px]'/>
      </div>
      
      <div className='w-[100%] absolute left-0 right-0 '>
        <img
        src={heroshape}
        className='w-full object-fill'
        />
      </div>
    </section>
    </>
  )
}

export default Home