import React from 'react'
import hero from '../images/hero.jpg'
import heroshape from '../images/hero-shape.svg'
import { Link } from 'react-router-dom'
import left from '../images/left.png'
import psuite from '../images/payment-suite.png'
import plink from '../images/payment-link-icon.svg'
import { FcCheckmark} from "react-icons/fc";
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

        <div className='absolute left-0 right-0 overflow-x-hidden'>
          <img
            src={heroshape}
            className='w-full object-fill'
          />
        </div>
      </section>
      <section className='relative mt-[130px]'>
        <img
          src={left}
          width="230"
          height="150"
          className='absolute top-[5rem] -left-[5rem] inline-block' />
        <img
          src={left}
          width="210"
          height="150"
          className='absolute -top-[5rem] right-3 inline-block' />
        <div className='w-11/12 max-w-[1080px] mx-auto pt-4 '>
          <h2 className='font-mullish text-center text-2xl leading-[1.2] font-extrabold hidden md:block'>Accept Payments with Razorpay Payment Suite</h2>
          <h2 class="font-mullish text-center text-5xl leading-[1.2] font-extrabold  md:hidden">Explore Razorpay Payment Suite</h2>
          <div className='w-10 h-1 bg-greenLight mx-auto mb-10'></div>
          <div className='flex  bg-white w-full min-h-[520px] rounded-md border relative p-10 py-12'>
            <div>
              <h3 className='font-mullish text-[28px] leading-10 
              font-bold max-w-[500px]'>Supercharge your business with the all-powerful
                <span className='text-lightBlue'>Payment Gateway</span>
              </h3>
              <ul className='space-y-2 mt-4'>
                <li className='font-mullish flex items-center space-x-2 hover:scale-110 transition-all duration-300'>
                <FcCheckmark />
                  <span>100+ Payment Methods</span>
                </li>
                <li className='font-mullish flex items-center space-x-2 hover:scale-110 transition-all duration-300'>
                <FcCheckmark />
                  <span> Industry Leading Success Rate</span>
                </li>
                <li className='font-mullish flex items-center space-x-2 hover:scale-110 transition-all duration-300'>
                <FcCheckmark />
                  <span>Superior Checkout Experience</span>
                </li>
                <li className='font-mullish flex items-center space-x-2 hover:scale-110 transition-all duration-300'>
                <FcCheckmark />
                  <span>Easy to Integrate</span>
                </li>
                <li className='font-mullish flex items-center space-x-2 hover:scale-110 transition-all duration-300'>
                <FcCheckmark />
                  <span>Instant Settlements from day 1</span>
                </li>
                <li className='font-mullish flex items-center space-x-2 hover:scale-110 transition-all duration-300'>
                <FcCheckmark />
                  <span> In-depth Reporting and Insights</span>
                </li>
              </ul>
              <div className='flex items-center space-x-4 mt-2'>
                <button className='bg-lightBlue w-full md:w-fit text-white py-[14px] px-[18px] rounded-md 
                font-mullish font-bold hover:bg-lightBlue500 hover:scale-110
                 tranlate-all duration-1000'>Sign Up Now</button>
                <div className='group flex  md:items-center cursor-pointer'>
                  <Link to={"/knowmore"} className='font-mullish font-bold text-lightBlue500 
                   group-hover:text-grayBlue transition-all duration-200'>Know More</Link>
                  <FcCheckmark />
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
        
        <div className='border grid grid-cols-3 gap-3 max-w-[1080px] mx-auto mt-10 p-10'>
        <div className='border group  rounded-xl relative w-full min-h-[15rem] cursor-pointer pt-7 pl-3 pr-5 hover:scale-110 hover:bg-cyan transition-all duration-500'>
            <img src={plink} alt="logo" className=' absolute right-3 top-3 w-10 h-10 bg-lightBlue rounded-full z-[8] group-hover:bg-sky' />
            <div className='space-y-6  py-4 z-[100]'>
            <div className='space-y-6'>
              <h3 className='font-mullish font-bold text-deepBlueHead leading-[1.2] text-[1.375rem]'>Payment Links</h3>
              <p className='font-mullish text-grayText '>Share payment link via an email, SMS, messenger, chatbot etc. and get paid immediately</p>
            </div>
            <div className='flex items-center gap-2 group'>
            <Link to={"/knowmore"} className='font-mullish font-bold text-lightBlue500
            group-hover:text-grayBlue transition-all duration-200'>Know More</Link>
            <FcCheckmark />
            </div>
            </div>
          </div>
          <div className='border group  rounded-xl relative w-full min-h-[15rem] cursor-pointer pt-7 pl-3 pr-5 hover:scale-110 hover:bg-cyan transition-all duration-500'>
            <img src={plink} alt="logo" className=' absolute right-3 top-3 w-10 h-10 bg-lightBlue rounded-full z-[8] group-hover:bg-sky' />
            <div className='space-y-6  py-4 z-[100]'>
            <div className='space-y-6'>
              <h3 className='font-mullish font-bold text-deepBlueHead leading-[1.2] text-[1.375rem]'>Payment Links</h3>
              <p className='font-mullish text-grayText '>Share payment link via an email, SMS, messenger, chatbot etc. and get paid immediately</p>
            </div>
            <div className='flex items-center gap-2 group'>
            <Link to={"/knowmore"} className='font-mullish font-bold text-lightBlue500
            group-hover:text-grayBlue transition-all duration-200'>Know More</Link>
            <FcCheckmark />
            </div>
            </div>
          </div>
          <div className='border group  rounded-xl relative w-full min-h-[15rem] cursor-pointer pt-7 pl-3 pr-5 hover:scale-110 hover:bg-cyan transition-all duration-500'>
            <img src={plink} alt="logo" className=' absolute right-3 top-3 w-10 h-10 bg-lightBlue rounded-full z-[8] group-hover:bg-sky' />
            <div className='space-y-6  py-4 z-[100]'>
            <div className='space-y-6'>
              <h3 className='font-mullish font-bold text-deepBlueHead leading-[1.2] text-[1.375rem]'>Payment Links</h3>
              <p className='font-mullish text-grayText '>Share payment link via an email, SMS, messenger, chatbot etc. and get paid immediately</p>
            </div>
            <div className='flex items-center gap-2 group'>
            <Link to={"/knowmore"} className='font-mullish font-bold text-lightBlue500
            group-hover:text-grayBlue transition-all duration-200'>Know More</Link>
            <FcCheckmark />
            </div>
            </div>
          </div>
          <div className='border group  rounded-xl relative w-full min-h-[15rem] cursor-pointer pt-7 pl-3 pr-5 hover:scale-110 hover:bg-cyan transition-all duration-500'>
            <img src={plink} alt="logo" className=' absolute right-3 top-3 w-10 h-10 bg-lightBlue rounded-full z-[8] group-hover:bg-sky' />
            <div className='space-y-6  py-4 z-[100]'>
            <div className='space-y-6'>
              <h3 className='font-mullish font-bold text-deepBlueHead leading-[1.2] text-[1.375rem]'>Payment Links</h3>
              <p className='font-mullish text-grayText '>Share payment link via an email, SMS, messenger, chatbot etc. and get paid immediately</p>
            </div>
            <div className='flex items-center gap-2 group'>
            <Link to={"/knowmore"} className='font-mullish font-bold text-lightBlue500
            group-hover:text-grayBlue transition-all duration-200'>Know More</Link>
            <FcCheckmark />
            </div>
            </div>
          </div>
          <div className='border group  rounded-xl relative w-full min-h-[15rem] cursor-pointer pt-7 pl-3 pr-5 hover:scale-110 hover:bg-cyan transition-all duration-500'>
            <img src={plink} alt="logo" className=' absolute right-3 top-3 w-10 h-10 bg-lightBlue rounded-full z-[8] group-hover:bg-sky' />
            <div className='space-y-6  py-4 z-[100]'>
            <div className='space-y-6'>
              <h3 className='font-mullish font-bold text-deepBlueHead leading-[1.2] text-[1.375rem]'>Payment Links</h3>
              <p className='font-mullish text-grayText '>Share payment link via an email, SMS, messenger, chatbot etc. and get paid immediately</p>
            </div>
            <div className='flex items-center gap-2 group'>
            <Link to={"/knowmore"} className='font-mullish font-bold text-lightBlue500
            group-hover:text-grayBlue transition-all duration-200'>Know More</Link>
            <FcCheckmark />
            </div>
            </div>
          </div>
          <div className='border group  rounded-xl relative w-full min-h-[15rem] cursor-pointer pt-7 pl-3 pr-5 hover:scale-110 hover:bg-cyan transition-all duration-500'>
            <img src={plink} alt="logo" className=' absolute right-3 top-3 w-10 h-10 bg-lightBlue rounded-full z-[8] group-hover:bg-sky' />
            <div className='space-y-6  py-4 z-[100]'>
            <div className='space-y-6'>
              <h3 className='font-mullish font-bold text-deepBlueHead leading-[1.2] text-[1.375rem]'>Payment Links</h3>
              <p className='font-mullish text-grayText '>Share payment link via an email, SMS, messenger, chatbot etc. and get paid immediately</p>
            </div>
            <div className='flex items-center gap-2 group'>
            <Link to={"/knowmore"} className='font-mullish font-bold text-lightBlue500
            group-hover:text-grayBlue transition-all duration-200'>Know More</Link>
            <FcCheckmark />
            </div>
            </div>
          </div> 
        </div>

      </section>
    </>
  )
}

export default Home