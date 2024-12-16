import React from 'react'
import hero from '../images/hero.jpg'
import heroshape from '../images/hero-shape.svg'
import { Link } from 'react-router-dom'
import left from '../images/left.png'
import psuite from '../images/payment-suite.png'
const Home = () => {
  return (
    <>
      <section className='relative bg-deepBlue'>
        <div className='w-10/12 max-w-[1080px] flex sm:flex-col lg:flex-row   justify-between items-center mx-auto'>
          <div className='text-white font-mullish space-y-8' >
            <h1 className='bold text-[40px] leading-[1.2]'>Power your finance, grow your business</h1>
            <div className='w-20 h-1 bg-greenLight'></div>
            <p className='text-[18px] leading-7 opacity-70'>Accept payments from customers. Automate payouts to vendors &
              employees. Never run out of working capital.</p>
            <button className='bg-lightBlue py-[14px] px-[16px] rounded-md font-bold
          hover:bg-lightBlue500 hover:scale-110 transition-all duration-1000 '>Sign Up Now</button>
          </div>
          <img
            src={hero}
            className='w-full max-w-[680px]' />
        </div>

        <div className=' absolute left-0 right-0 overflow-x-hidden'>
          <img
            src={heroshape}
            className='w-full object-fill'
          />
        </div>
      </section>
      <section className='relative mt-[130px] border-2 border-black'>
        <img
          src={left}
          width="210"
          height="150"
          className='absolute -top-[8rem] left-[5rem]' />
        <img
          src={left}
          width="210"
          height="150"
          className='absolute -top-[1rem] right-0' />
        <div className='w-11/12 max-w-[1080px] mx-auto pt-4 border-2 border-violet-900'>
          <h2 className='font-mullish text-center text-2xl leading-[1.2] font-extrabold hidden md:block'>Accept Payments with Razorpay Payment Suite</h2>
          <h2 class="font-mullish text-center text-5xl leading-[1.2] font-extrabold  md:hidden">Explore Razorpay Payment Suite</h2>
          <div className='w-10 h-1 bg-greenLight mx-auto'></div>
          <div className='flex w-full min-h-[520px] rounded-md relative p-10 py-12'>
            <div className='border-2 border-pink-500'>
              <h3 className='font-mullish text-[28px] leading-10 
              font-bold max-w-[500px]'>Supercharge your business with the all-powerful
                <span className='text-lightBlue'>Payment Gateway</span>
              </h3>
              <ul className='space-y-2'>
                <li className='font-mullish flex items-center space-x-2'>
                  <i data-feather="check " className='text-greenLight'> hello</i>
                  <span>100+ Payment Methods</span>
                </li>
                <li className='font-mullish flex items-center space-x-2'>
                  <i data-feather="check " className='text-greenLight'> hello</i>
                  <span> Industry Leading Success Rate</span>
                </li>
                <li className='font-mullish flex items-center space-x-2'>
                  <i data-feather="check " className='text-greenLight'> hello</i>
                  <span>Superior Checkout Experience</span>
                </li>
                <li className='font-mullish flex items-center space-x-2'>
                  <i data-feather="check " className='text-greenLight'> hello</i>
                  <span>Easy to Integrate</span>
                </li>
                <li className='font-mullish flex items-center space-x-2'>
                  <i data-feather="check " className='text-greenLight'> hello</i>
                  <span>Instant Settlements from day 1</span>
                </li>
                <li className='font-mullish flex items-center space-x-2'>
                  <i data-feather="check " className='text-greenLight'> hello</i>
                  <span> In-depth Reporting and Insights</span>
                </li>
              </ul>
              <div>
                <button className='bg-lightBlue w-full md:w-fit text-white py-[14px] px-[18px] rounded-md 
                font-mullish font-bold hover:bg-lightBlue500 hover:scale-110
                 tranlate-all duration-1000'>Sign Up Now</button>
                <div className='group flex self-start md:items-center cursor-pointer'>
                  <Link to={"/knowmore"} className='font-mullish font-bold text-lightBlue500 
                   group-hover:text-grayBlue transition-all duration-200'>Know More</Link>
                  <i
                      data-feather="chevron-right"
                      className="w-5 h-5 text-lightBlue500 
                      group-hover:text-grayBlue transition-all duration-200">hello</i>
                </div>
              </div>
            </div>
            <img
            src={psuite}
            className='max-w-[600px] absolute right-0
             bottom-0 hidden md-max-w-[400px] 
             lg:max-w-[600px] md:block lg:block ' />
          </div>
        </div>

      </section>
    </>
  )
}

export default Home