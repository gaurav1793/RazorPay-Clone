import React from 'react'
import logo from '../images/logo.svg'
import india from '../images/india-flag.svg'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="bg-deepBlue relative w-full overflow-x-hidden flex   justify-center items-center gap-2">

            <img src={logo}
                alt='logo'
                width="125px"
                height="30px" />
            <ul className='flex gap-2 '>
                <li className='relative group  text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 hidden lg:block'>
                    <Link to="/#">payments</Link>
                    <div className='absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-200'></div>
                </li>
                <li className='relative group  text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 hidden lg:block'>
                    <Link to="/#">banking+</Link>
                    <div className='absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-200'></div>
                </li>
                <li className='relative group  text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 hidden lg:block'>
                    <Link to="/#">PayRoll</Link>
                    <div className='absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-200'></div>
                </li>
                <li className='relative group  text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 hidden lg:block'>
                    <Link to="/#">Resources</Link>
                    <div className='absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-200'></div>
                </li>
                <li className='relative group  text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200  hidden lg:block'>
                    <Link to="/#">Support</Link>
                    <div className='absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-200'></div>
                </li>
                <li className='relative group  text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 hidden lg:block'>
                    <Link to="/#">Pricing</Link>
                    <div className='absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-200'></div>
                </li>
            </ul>
            <div className='flex space-x-3'>
                <img
                    src={india}
                    width="28px"
                    height="20px"
                    className="hidden lg:block"
                />
                <button className='py-3 px-5 font-mullish text-white border-lightBlue
                 border rounded-sm text-sm font-bold'>Log in</button>
                <button className='py-3 px-4 font-mullish rounded-sm text-sm
                 font-bold bg-white text-lightBlue300 border transition-all duration-200
                 hover:text-lightBlue500 hidden lg:flex'>Sign up
                    <svg
                        viewBox="0 0 24 24"
                        focusable="false"
                        class="w-[14px] h-[14px] ml-3"
                    >
                        <path
                            fill="currentColor"
                            d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                        ></path>
                    </svg></button>
            </div>
        </div>
    )
}

export default NavBar