import { Container } from './Container'
import { Link } from 'react-router'
import { FaBars } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { PiPhoneCall } from "react-icons/pi";
import { useRef, useState } from "react";
import { useOutside } from '../Hooks/Outside';
import { IoClose } from "react-icons/io5";
import { CiApple } from "react-icons/ci";
import { FaBurger } from "react-icons/fa6";
import { IoFishOutline } from "react-icons/io5";
import { GiChickenOven } from "react-icons/gi";
import { FaBottleWater } from "react-icons/fa6";
import { TbIceCream } from "react-icons/tb";
import { RiCake2Line } from "react-icons/ri";
import { GiButter } from "react-icons/gi";
import { LuCookingPot } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";

export const Navbar = () => {
  // category state
  const [all, setAll] = useState(false)
  let dropdownRef = useRef(null)
  // outside click
  useOutside(dropdownRef, setAll, all);
  // sidebar
  const [show, setShow] = useState(false)




  return (
    <>
      <div className=" relative bg-[#333333] w-full md:py-0    ">
        <Container>
          <div className="flex justify-between items-center gap-3 md:gap-0">
            <div className="flex items-center w-full justify-between sm:w-auto md:w-auto md:justify-start">
              {/* Mobile Hamburger */}
              <div className="flex items-center gap-3  md:gap-0 ">
                <FaBars
                  className=" bg-[#00B207] text-white text-xl sm:text-[60px] p-2 md:p-4 cursor-pointer rounded"
                  onClick={() => setShow(true)}
                />
                <div ref={dropdownRef}
                  className=" flex text-white bg-[#364153] px-3 py-2 md:p-[18px] items-center cursor-pointer gap-2"
                  onClick={() => setAll(!all)}
                >
                  All Category{" "}
                  <FaAngleDown
                    className="text-center items-center"
                    size={18}
                  />
                </div>
              </div>

              {/* Navbar items - Desktop */}
              <ul className="hidden md:flex items-center gap-x-6 lg:gap-x-8 text-sm font-pop font-medium ml-4 md:ml-10">
                <li>
                  <Link
                    to="/"
                    className="flex items-center gap-x-1 text-[#808080] hover:text-white"
                  >
                    Home 
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shop"
                    className="flex items-center gap-x-1 text-[#808080] hover:text-white"
                  >
                    Shop <FaAngleDown size={18} />
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="flex items-center gap-x-1 text-[#808080] hover:text-white"
                  >
                    Pages <FaAngleDown size={18} />
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="flex items-center gap-x-1 text-[#808080] hover:text-white"
                  >
                    Blog <FaAngleDown size={18} />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/About"
                    className="flex items-center gap-x-1 text-[#808080] hover:text-white"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Contact"
                    className="flex items-center gap-x-1 text-[#808080] hover:text-white"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            {/* telephone number */}
            <div className="font-pop font-medium text-xs md:text-sm text-white ">
              <Link to="tel:2195550114" className="flex items-center gap-x-2">
                {" "}
                <PiPhoneCall size={20} className="md:text-[32px]" />
                (219) 555-0114
              </Link>
            </div>
          </div>

          {/* CATEGORY DROPDOWN */}
          {all && (
            <div className="absolute z-20 w-full md:w-[208px] bg-white shadow-lg">
              <ul className="text-black ">
                <li className="flex items-center gap-2 p-3 md:p-4 hover:bg-green-500 hover:text-white cursor-pointer">
                  <CiApple className="text-xl md:text-[24px]" /> Fresh Fruit
                </li>

                <li className=" flex items-center gap-2 p-3 md:p-4 hover:bg-green-500 hover:text-white cursor-pointer">
                  <FaBurger className="text-xl md:text-[24px]" /> Vegetables
                </li>

                <li className="flex items-center gap-2 p-3 md:p-4 hover:bg-green-500 hover:text-white cursor-pointer">
                  <IoFishOutline className="text-xl md:text-[24px]" />
                  River Fish
                </li>

                <li className="flex items-center gap-2 p-3 md:p-4 hover:bg-green-500 hover:text-white cursor-pointer">
                  <GiChickenOven className="text-xl md:text-[24px]" /> Chicken & Meat
                </li>

                <li className="flex items-center gap-2 p-3 md:p-4 hover:bg-green-500 hover:text-white cursor-pointer">
                  <FaBottleWater className="text-xl md:text-[24px]" /> Drink & Water
                </li>

                <li className="flex items-center gap-2 p-3 md:p-4 hover:bg-green-500 hover:text-white cursor-pointer">
                  <TbIceCream className="text-xl md:text-[24px]" /> Yogurt & Ice Cream
                </li>

                <li className="flex items-center gap-2 p-3 md:p-4 hover:bg-green-500 hover:text-white cursor-pointer">
                  <RiCake2Line className="text-xl md:text-[24px]" /> Cake & Bread
                </li>

                <li className="flex items-center gap-2 p-3 md:p-4 hover:bg-green-500 hover:text-white cursor-pointer">
                  <GiButter className="text-xl md:text-[24px]" /> Butter & Cream
                </li>

                <li className="flex items-center gap-2 p-3 md:p-4 hover:bg-green-500 hover:text-white cursor-pointer">
                  <LuCookingPot className="text-xl md:text-[24px]" />
                  Cooking
                </li>

                <li className="flex items-center gap-2 p-3 md:p-4 border-t hover:bg-green-500 hover:text-white cursor-pointer">
                  <FiPlus className="text-xl md:text-[24px]" />
                  View All Category
                </li>
              </ul>
            </div>
          )}
        </Container>
      </div>




      {/* Sidebar */}

      {show ? (
        <div className="z-50 w-[85vw] max-w-[420px] h-full bg-white p-6 border-r border-gray-200 top-0 left-0 fixed duration-300 overflow-y-auto">
          {/* Top */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl md:text-[24px] font-semibold text-black">Menu</h2>

            {/* Close Button */}
            <button onClick={() => setShow(false)}>
              <IoClose size={24} className="text-black cursor-pointer" />
            </button>
          </div>

          {/* Nav Menu Items */}
          <div className="mb-6 border-b pb-4">
            <h3 className="text-sm font-semibold text-gray-500 mb-3 uppercase">Navigation</h3>
            <ul className="text-black">

           <Link to="/"><li className="flex border-b border-gray-100 items-center justify-between p-3 md:p-4 hover:bg-green-500 hover:text-white cursor-pointer">
                <div className="flex items-center gap-2">
                  Home
                </div>
               
              </li></Link>

           <Link to="/shop"><li className="flex border-b border-gray-100 items-center justify-between p-3 md:p-4 hover:bg-green-500 hover:text-white cursor-pointer">
                <div className="flex items-center gap-2">
                  Shop
                </div>
                <FaAngleDown size={16} />
              </li></Link>

              <li className="flex border-b border-gray-100 items-center justify-between p-3 md:p-4 hover:bg-green-500 hover:text-white cursor-pointer">
                <div className="flex items-center gap-2">
                  Pages
                </div>
                <FaAngleDown size={16} />
              </li>
              <li className="flex border-b border-gray-100 items-center justify-between p-3 md:p-4 hover:bg-green-500 hover:text-white cursor-pointer">
                <div className="flex items-center gap-2">
                  Blog
                </div>
                <FaAngleDown size={16} />
              </li>

           <Link to="/about"><li className="flex border-b border-gray-100 items-center gap-2 p-3 md:p-4 hover:bg-green-500 hover:text-white cursor-pointer">
                About Us
              </li></Link>

            <Link to="/contact"><li className="flex items-center gap-2 p-3 md:p-4 hover:bg-green-500 hover:text-white cursor-pointer">
                Contact Us
              </li></Link>
            </ul>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
