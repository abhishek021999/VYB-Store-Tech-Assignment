"use client"
import React, { useEffect, useRef, useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { CiCircleInfo } from "react-icons/ci";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaUser } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from 'next/link';
import Sidebar from './Sidebar';

function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
     // Close the dropdown if a click is detected outside of it
     useEffect(() => {
        const handleClickOutside = (event) => {
          if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target) &&
            !event.target.closest(".dropdown-toggle") // ensure that clicks on the toggle icon also close the dropdown
          ) {
            setIsDropdownOpen(false);
          }
        };
    
        // Add event listener
        document.addEventListener("mousedown", handleClickOutside);
    
        return () => {
          // Remove event listener on cleanup
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [dropdownRef]);
  return (
    <div className='xs:w-[360px] xs:h-auto xs:pt-[23px] xs:m-auto xl:m-0  xs:pb-[23px]'>
    <div className='main_container xl:w-[1200px] xl:h-[90px] rounded-[35px]  xl:mt-[12px] xl:ml-[120px] xl:pt-[20px] xl:pr-[24px] xl:pb-[20px] xl:pl-[24px]  flex items-center xl:gap-[60px] xl:bg-[#D6D6D666] xs:w-full xs:min-[328px] xs:h-[70px] xs:p-[20px_15px] xs:gap-[12px] xs:bg-[#D6D6D666] xs:pl-[23px] xs:pr-[23px] m-auto'>
      <img className='xl:w-[128px] xl:h-[63px] xs:w-[63px] xs:h-[31.01px]' src="https://s3-alpha-sig.figma.com/img/f0f7/a7d4/3521fdad3f1a3f7437470e4d29fa8e69?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PbsSuY0yrYBrSAHEIXjY8tPPBPIvD2f-dzi88L0cDHpcwU8hAynWz4tgXC9jP8qXX51uRyumB3BWbaKmADHx5refFKJp3UwjnpeVC4YH81selrwVnU6tkuceQ1l7zd-mFE~rR6wPxgUa5WiCtX5JYCfX1NgPZ3u42HnrYNjga2mKPEoLB-GB72NCTurIrroAW1wNrBE5NbApd2r5y3o5XLdQhrpzaLRhrt3s4rgNlK50~feZzpQfEFhU0Jna-GptIKf~MT0YJD6KrAiMDLTandMkPAGps2g8HtmbzADo1apRUgxf43idhfpNv5GAZ8-hQpDgxnJeZzy2W8nR1ZM~ig__" alt="" />
      {/* Search box */}
      <div className='search_box xl:w-[290px] xl:h-[50px] rounded-[25px] bg-[#F8F9FB] flex items-center gap-[10px] xs:w-[191px] xs:h-auto xs:min-h-[37px] xs:p[10px_16px]'>
  <IoSearchOutline className="xl:w-[20px] xl:h-[20px] ml-[16px]"/>
  <input className='w-full xl:w-[191px] xl:text-body2 font-[500] text-[#404040] outline-none bg-[#F8F9FB] rounded-[25px] xs:text-[14px]' type="text" placeholder='Search' />
</div>
      {/* Hamburger */}
        <Sidebar/>

      <div className='xl:w-full xl:h-auto xl:flex xl:justify-between xl:items-center xs:hidden '>
        <div className='xl:w-[359px] xl:h-auto xl:flex xl:gap-[30px]'>
          <div className='xl:w-full xl:h-auto xl:flex xl:items-center xl:p-[10px] xl:gap-[10px]'>
            <IoCartOutline className='xl:w-[20px] xl:h-[20px]' />
            <p className='xl:text-body1 xl:font-[500] xl:text-center'>Cart</p>
          </div>
          <div className='xl:w-full xl:h-auto xl:flex xl:items-center xl:p-[10px] xl:gap-[10px]'>
            <CiCircleInfo className='xl:w-[20px] xl:h-[20px]' />
            <p className='xl:text-body1 xl:font-[500] xl:text-center'>About</p>
          </div>
          <div className='xl:w-full xl:h-auto xl:flex xl:items-center xl:p-[10px] xl:gap-[10px]'>
            <TfiHeadphoneAlt className='xl:w-[20px] xl:h-[20px]' />
            <p className='xl:text-body1 xl:font-[500] xl:text-center'>Contact</p>
          </div>
        </div>
        <div className='xl:relative  xl:w-auto xl:h-[42px] xl:rounded-[15px] xl:border-[1px] xl:p-[7px_17px] xl:flex xl:items-center xl:gap-[20px] xl:justify-center'>
        <FaUser className='xl:w-[25px] xl:h-[25px] xl:ml-[17px] '  />
        <RiArrowDropDownLine className='xl:w-[25px] xl:h-[25px] cursor-pointer dropdown-toggle ' onClick={toggleDropdown}/>
        

      {isDropdownOpen && (
        <div ref={dropdownRef} className=" w-[147px] h-auto absolute right-0 mt-[190px] text-primaryText text-body1 font-[500]  border-gray-200 rounded-[15px] shadow-lg bg-[#D6D6D666] flex justify-center items-center">
          <div className="py-2">
            <Link
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-t-lg"
            >
              Profile
            </Link>
            <Link
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-b-lg"
            >
              Login
            </Link>
          </div>
        </div>
      )}
        </div>
      </div>
    </div>
    </div>
  )
}

export default Navbar
