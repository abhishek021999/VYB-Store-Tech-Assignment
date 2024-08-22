"use client"
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { IoStorefront } from "react-icons/io5";
import { LuIndianRupee } from "react-icons/lu";
import { LiaAddressBook } from "react-icons/lia";
import { BiCommentError } from "react-icons/bi";
import { ImHeadphones } from "react-icons/im";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-[20px] h-[20px]  xl:hidden xs:block">
      <GiHamburgerMenu className="absolute" size={20} onClick={toggleSidebar} />
      <aside
        className={`absolute top-11 left-0  w-[207px] h-auto max-h-[776px] bg-gray-800 p-[120px_14px] bg-[#D6D6D666] bg-opacity-40 ${
          isOpen ? 'block translate-x-0' : 'hidden'
        }`}
        style={{ left: '0%', transform: 'translateX(-100%)' }}
      >
        {/* Sidebar content */}
        <div className='main flex flex-col  gap-[15px] '>  
            <div className='profile w-full min-w-[126px] h-auto'>
                <img className='w-[60px] h-[60px] rounded-[50%] border-[2px_#4A508E]' src="https://s3-alpha-sig.figma.com/img/3013/4ae3/200faf5e4502847734a0b9d42192f8da?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lUDbzNde6B~6FdEqkUHcst-hjbyI3Foy0B2py81xA-vXH13nlMncgIPiWRNVbUqHtstTHsLm4as~pLibvZ9C6jIxpBG-fOFPCnJFD-mDY93Bs0o9GoYVsm6ASI5UXwHbGJmWfMnRN7Nx-UykoxMytkg9DRUcvMFCAR9-z84mV6hO2VhlijnitnMemKV43i8bX-L1UhxoEEwz6x4wrcoLOBTQ~Q2R7GssE7DtTr3LcHOTDkDipVD1o~9ri~f3cs4enT11~spp81XAQARBSn-k8TAanDVW3IVso8gtcrjCdioaKzkPgdCl1X9wfWZU0uX873hce8BOzrgkKk2t49kbdg__" alt="" />
                <div className='min-w-[126px] h-auto min-h-48px flex-row'>
                    <p className='font-[700] text-[20px]'>Samira Hadid</p>
                    <p className='font-[500] text-[16px] leading-[19.2px]'>@samirahadid</p>
                </div>
            </div>
            
            <div className='profile min-w-[94px] w-auto h-auto min-h-[32px] flex items-center gap-[11px]'>
            <CgProfile className='w-[32px] h-[32px]'/>
            <p className='font-[700] text-[18px] leading-[21.6px]'>Profile</p>
            </div>

            <div className='profile max-w-[123px] w-auto h-auto min-h-[32px] flex items-center gap-[11px]'>
            <IoStorefront className='w-[32px] h-[32px]'/>
            <p className='font-[700] text-[18px] leading-[21.6px]'>Store</p>
            </div>

            <div className='profile max-w-[114px] w-auto h-auto min-h-[32px] flex items-center gap-[11px]'>
            <LuIndianRupee  className='w-[32px] h-[32px]'/>
            <p className='font-[700] text-[18px] leading-[21.6px]'>Earning</p>
            </div>

            <div className='profile max-w-[110px] w-auto h-auto min-h-[32px] flex items-center gap-[11px]'>
            <LiaAddressBook   className='w-[32px] h-[32px]'/>
            <p className='font-[700] text-[18px] leading-[21.6px]'>Address</p>
            </div>

            <div className='profile max-w-[110px] w-auto h-auto min-h-[32px] flex items-center gap-[11px]'>
            <BiCommentError    className='w-[32px] h-[32px]'/>
            <p className='font-[700] text-[18px] leading-[21.6px]'>About us</p>
            </div>
            <div className='profile max-w-[132px] w-auto h-auto min-h-[32px] flex items-center gap-[11px]'>
            <ImHeadphones     className='w-[32px] h-[32px]'/>
            <p className='font-[700] text-[18px] leading-[21.6px]'>About us</p>
            </div>

            <div className='profile max-w-[91px] h-auto -h-[54px] rounded-[18px] p-[16px_24px] bg-[#003C3C] text-white font-[600] text-[18px]'>

                <button>Login</button>
            
            </div>



            
            

            





        </div>


      </aside>
    </div>
  );
}

export default Sidebar;