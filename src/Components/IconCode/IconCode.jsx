import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { Link } from 'react-router';
  const IconCode = () => {
  return (
    <>
    <div className="flex gap-2 ">
              <div className="w-10 h-10 rounded-full flex justify-center items-center hover:bg-[#00B207] hover:text-white cursor-pointer text-[#4D4D4D]">
                <Link to='https://www.facebook.com/' target='blank'>
                  <FaFacebookF size={22} />
                </Link>
              </div>
              <div className="w-10 h-10 rounded-full flex justify-center items-center hover:bg-[#00B207] hover:text-white cursor-pointer text-[#4D4D4D]">
                <Link to='https://x.com/' target='_blank'>
                  <FaTwitter size={22} />
                </Link>
              </div>
              <div className="w-10 h-10 rounded-full flex justify-center items-center hover:bg-[#00B207] hover:text-white cursor-pointer text-[#4D4D4D]">
                <Link to='https://www.pinterest.com//' target='_blank'>
                  <FaPinterestP size={22} />
                </Link>
              </div>
              <div className="w-10 h-10 rounded-full flex justify-center items-center hover:bg-[#00B207] hover:text-white cursor-pointer text-[#4D4D4D]">
                <Link to='https://www.instagram.com/' target='_blank'>
                  <FaInstagram size={22} />
                </Link>
              </div>
            </div>
    
    </>
  )
}

export default IconCode