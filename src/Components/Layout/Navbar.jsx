import { Container } from "./Container";
import { Link } from "react-router";
import { FaBars, FaAngleDown } from "react-icons/fa";
import { PiPhoneCall } from "react-icons/pi";
import { useRef, useState } from "react";
import { useOutside } from "../Hooks/Outside";
import { IoClose } from "react-icons/io5";
import { CiApple } from "react-icons/ci";
import { FaBurger, FaBottleWater } from "react-icons/fa6";
import { IoFishOutline } from "react-icons/io5";
import { GiChickenOven, GiButter } from "react-icons/gi";
import { TbIceCream } from "react-icons/tb";
import { RiCake2Line } from "react-icons/ri";
import { LuCookingPot } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";

export const Navbar = () => {
  // =========================
  // ALL CATEGORY DROPDOWN
  // =========================
  const [all, setAll] = useState(false);

  const dropdownRef = useRef(null);

  useOutside(dropdownRef, setAll, all);

  // =========================
  // MOBILE SIDEBAR
  // =========================
  const [show, setShow] = useState(false);

  // =========================
  // NAVBAR SUBMENU
  // shop / pages / blog
  // =========================
  const [activeMenu, setActiveMenu] = useState(null);

  // =========================
  // MOBILE SUBMENU
  // =========================
  const [mobileMenu, setMobileMenu] = useState(null);

  const handleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const handleMobileMenu = (menu) => {
    setMobileMenu(mobileMenu === menu ? null : menu);
  };

  return (
    <>
      {/* =====================================================
          NAVBAR
      ====================================================== */}
      <div className="relative bg-[#333333] w-full">
        <Container>
          <div className="flex justify-between items-center gap-3 md:gap-0">
            <div className="flex items-center w-full justify-between sm:w-auto md:w-auto md:justify-start">

              {/* ================= MOBILE HAMBURGER ================= */}
              <div className="flex items-center gap-3 md:gap-0">

                <FaBars
                  className="bg-[#00B207] text-white text-xl sm:text-[60px] p-2 md:p-4 cursor-pointer rounded"
                  onClick={() => setShow(true)}
                />

                {/* ================= ALL CATEGORY ================= */}
                <div
                  ref={dropdownRef}
                  className="flex text-white bg-[#364153] px-3 py-2 md:p-[18px] items-center cursor-pointer gap-2"
                  onClick={() => setAll(!all)}
                >
                  All Category

                  <FaAngleDown
                    className={`transition-transform duration-300 ${
                      all ? "rotate-180" : ""
                    }`}
                    size={18}
                  />
                </div>
              </div>

              {/* =====================================================
                  DESKTOP NAVBAR
              ====================================================== */}
              <ul className="hidden md:flex items-center gap-x-6 lg:gap-x-8 text-sm font-pop font-medium ml-4 md:ml-10">

                {/* HOME */}
                <li>
                  <Link
                    to="/"
                    className="flex items-center gap-x-1 text-[#808080] hover:text-white"
                  >
                    Home
                  </Link>
                </li>

                {/* =================================================
                    SHOP
                ================================================== */}
                <li className="relative">
                  <button
                    onClick={() => handleMenu("shop")}
                    className="flex items-center gap-x-1 text-[#808080] hover:text-white cursor-pointer"
                  >
                    Shop

                    <FaAngleDown
                      size={18}
                      className={`transition-transform duration-300 ${
                        activeMenu === "shop" ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {activeMenu === "shop" && (
                    <div className="absolute top-full left-0 mt-3 z-50 w-56 bg-white shadow-xl rounded-sm overflow-hidden">
                      <ul className="text-black">

                        <li>
                          <Link
                            to="/shop"
                             onClick={() => setActiveMenu(null)}
                            className="block p-4 hover:bg-[#00B207] hover:text-white transition"
                          >
                            
                            All Products
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/Details"
                             onClick={() => setActiveMenu(null)}
                            className="block p-4 hover:bg-[#00B207] hover:text-white transition"
                          >
                            
                           Product Details
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/cart"
                             onClick={() => setActiveMenu(null)}
                            className="block p-4 hover:bg-[#00B207] hover:text-white transition"
                          >
                            
                            Shoping Cart
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/Checkout"
                             onClick={() => setActiveMenu(null)}
                            className="block p-4 hover:bg-[#00B207] hover:text-white transition"
                          >

                            Checkout
                          </Link>
                        </li>

                      </ul>
                    </div>
                  )}
                </li>

                {/* =================================================
                    PAGES
                ================================================== */}
                <li className="relative">
                  <button
                    onClick={() => handleMenu("pages")}
                    className="flex items-center gap-x-1 text-[#808080] hover:text-white cursor-pointer"
                  >
                    Pages

                    <FaAngleDown
                      size={18}
                      className={`transition-transform duration-300 ${
                        activeMenu === "pages" ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {activeMenu === "pages" && (
                    <div className="absolute top-full left-0 mt-3 z-50 w-52 bg-white shadow-xl rounded-sm overflow-hidden">
                      <ul className="text-black">

                        <li>
                          <Link
                            to="/Login"
                            onClick={() => setActiveMenu(null)}
                            className="block p-4 hover:bg-[#00B207] hover:text-white transition"
                          >
                            Login
                          </Link>
                        </li>

                        <li>
                          <Link
                            to="/Registation"
                            onClick={() => setActiveMenu(null)}
                            className="block p-4 hover:bg-[#00B207] hover:text-white transition"
                          >
                            Registation
                          </Link>
                        </li>

                        <li>
                          <Link
                            to="/faq"
                            onClick={() => setActiveMenu(null)}
                            className="block p-4 hover:bg-[#00B207] hover:text-white transition"
                          >
                            FAQ
                          </Link>
                        </li>

                      </ul>
                    </div>
                  )}
                </li>

                {/* =================================================
                    BLOG
                ================================================== */}
                <li className="relative">
                  <button
                    onClick={() => handleMenu("blog")}
                    className="flex items-center gap-x-1 text-[#808080] hover:text-white cursor-pointer"
                  >
                    Blog

                    <FaAngleDown
                      size={18}
                      className={`transition-transform duration-300 ${
                        activeMenu === "blog" ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {activeMenu === "blog" && (
                    <div className="absolute top-full left-0 mt-3 z-50 w-52 bg-white shadow-xl rounded-sm overflow-hidden">
                      <ul className="text-black">
{/* 
                        <li>
                          <Link
                            to="/blog"
                            onClick={() => setActiveMenu(null)}
                            className="block p-4 hover:bg-[#00B207] hover:text-white transition"
                          >
                            Blog Grid
                          </Link>
                        </li>

                        <li>
                          <Link
                            to="/blog/details"
                            onClick={() => setActiveMenu(null)}
                            className="block p-4 hover:bg-[#00B207] hover:text-white transition"
                          >
                            Blog Details
                          </Link>
                        </li> */}

                      </ul>
                    </div>
                  )}
                </li>

                {/* ABOUT */}
                <li>
                  <Link
                    to="/about"
                    className="flex items-center gap-x-1 text-[#808080] hover:text-white"
                  >
                    About Us
                  </Link>
                </li>

                {/* CONTACT */}
                <li>
                  <Link
                    to="/contact"
                    className="flex items-center gap-x-1 text-[#808080] hover:text-white"
                  >
                    Contact Us
                  </Link>
                </li>

              </ul>
            </div>

            {/* =====================================================
                TELEPHONE
            ====================================================== */}
            <div className="font-pop font-medium text-xs md:text-sm text-white">
              <Link
                to="tel:2195550114"
                className="flex items-center gap-x-2"
              >
                <PiPhoneCall size={20} className="md:text-[32px]" />
                (219) 555-0114
              </Link>
            </div>
          </div>

          {/* =====================================================
              ALL CATEGORY DROPDOWN
          ====================================================== */}
          {all && (
            <div className="absolute z-50 w-full md:w-[208px] bg-white shadow-lg">
              <ul className="text-black">

                <li className="flex items-center gap-2 p-3 md:p-4 hover:bg-green-500 hover:text-white cursor-pointer">
                  <CiApple className="text-xl md:text-[24px]" />
                  Fresh Fruit
                </li>

                <li className="flex items-center gap-2 p-3 md:p-4 hover:bg-green-500 hover:text-white cursor-pointer">
                  <FaBurger className="text-xl md:text-[24px]" />
                  Vegetables
                </li>

                <li className="flex items-center gap-2 p-3 md:p-4 hover:bg-green-500 hover:text-white cursor-pointer">
                  <IoFishOutline className="text-xl md:text-[24px]" />
                  River Fish
                </li>

                <li className="flex items-center gap-2 p-3 md:p-4 hover:bg-green-500 hover:text-white cursor-pointer">
                  <GiChickenOven className="text-xl md:text-[24px]" />
                  Chicken & Meat
                </li>

                <li className="flex items-center gap-2 p-3 md:p-4 hover:bg-green-500 hover:text-white cursor-pointer">
                  <FaBottleWater className="text-xl md:text-[24px]" />
                  Drink & Water
                </li>

                <li className="flex items-center gap-2 p-3 md:p-4 hover:bg-green-500 hover:text-white cursor-pointer">
                  <TbIceCream className="text-xl md:text-[24px]" />
                  Yogurt & Ice Cream
                </li>

                <li className="flex items-center gap-2 p-3 md:p-4 hover:bg-green-500 hover:text-white cursor-pointer">
                  <RiCake2Line className="text-xl md:text-[24px]" />
                  Cake & Bread
                </li>

                <li className="flex items-center gap-2 p-3 md:p-4 hover:bg-green-500 hover:text-white cursor-pointer">
                  <GiButter className="text-xl md:text-[24px]" />
                  Butter & Cream
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

      {/* =====================================================
          MOBILE SIDEBAR
      ====================================================== */}
      {show && (
        <>
          {/* OVERLAY */}
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setShow(false)}
          ></div>

          {/* SIDEBAR */}
          <div className="z-50 w-[85vw] max-w-[420px] h-full bg-white p-6 border-r border-gray-200 top-0 left-0 fixed overflow-y-auto">

            {/* TOP */}
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl md:text-[24px] font-semibold text-black">
                Menu
              </h2>

              <button onClick={() => setShow(false)}>
                <IoClose
                  size={24}
                  className="text-black cursor-pointer"
                />
              </button>
            </div>

            {/* NAVIGATION */}
            <div className="mb-6 border-b pb-4">
              <h3 className="text-sm font-semibold text-gray-500 mb-3 uppercase">
                Navigation
              </h3>

              <ul className="text-black">

                {/* HOME */}
                <li>
                  <Link
                    to="/"
                    onClick={() => setShow(false)}
                    className="flex border-b border-gray-100 items-center justify-between p-3 md:p-4 hover:bg-green-500 hover:text-white cursor-pointer"
                  >
                    Home
                  </Link>
                </li>

                {/* =================================================
                    MOBILE SHOP
                ================================================== */}
                <li className="border-b border-gray-100">

                  <button
                    onClick={() => handleMobileMenu("shop")}
                    className="w-full flex items-center justify-between p-3 md:p-4 hover:bg-green-500 hover:text-white cursor-pointer"
                  >
                    <span>Shop</span>

                    <FaAngleDown
                      size={16}
                      className={`transition-transform duration-300 ${
                        mobileMenu === "shop"
                          ? "rotate-180"
                          : ""
                      }`}
                    />
                  </button>

                  {mobileMenu === "shop" && (
                    <ul className="bg-gray-50">

                      <li>
                        <Link
                          to="/shop"
                          onClick={() => setShow(false)}
                          className="block pl-8 p-3 hover:bg-green-500 hover:text-white"
                        >
                          All Products
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/shop/fruit"
                          onClick={() => setShow(false)}
                          className="block pl-8 p-3 hover:bg-green-500 hover:text-white"
                        >
                          Fresh Fruit
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/shop/vegetables"
                          onClick={() => setShow(false)}
                          className="block pl-8 p-3 hover:bg-green-500 hover:text-white"
                        >
                          Vegetables
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/shop/fish"
                          onClick={() => setShow(false)}
                          className="block pl-8 p-3 hover:bg-green-500 hover:text-white"
                        >
                          River Fish
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/shop/meat"
                          onClick={() => setShow(false)}
                          className="block pl-8 p-3 hover:bg-green-500 hover:text-white"
                        >
                          Chicken & Meat
                        </Link>
                      </li>

                    </ul>
                  )}
                </li>

                {/* =================================================
                    MOBILE PAGES
                ================================================== */}
                <li className="border-b border-gray-100">

                  <button
                    onClick={() => handleMobileMenu("pages")}
                    className="w-full flex items-center justify-between p-3 md:p-4 hover:bg-green-500 hover:text-white cursor-pointer"
                  >
                    <span>Pages</span>

                    <FaAngleDown
                      size={16}
                      className={`transition-transform duration-300 ${
                        mobileMenu === "pages"
                          ? "rotate-180"
                          : ""
                      }`}
                    />
                  </button>

                  {mobileMenu === "pages" && (
                    <ul className="bg-gray-50">

                      <li>
                        <Link
                          to="/about"
                          onClick={() => setShow(false)}
                          className="block pl-8 p-3 hover:bg-green-500 hover:text-white"
                        >
                          About Us
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/contact"
                          onClick={() => setShow(false)}
                          className="block pl-8 p-3 hover:bg-green-500 hover:text-white"
                        >
                          Contact Us
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/faq"
                          onClick={() => setShow(false)}
                          className="block pl-8 p-3 hover:bg-green-500 hover:text-white"
                        >
                          FAQ
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/team"
                          onClick={() => setShow(false)}
                          className="block pl-8 p-3 hover:bg-green-500 hover:text-white"
                        >
                          Our Team
                        </Link>
                      </li>

                    </ul>
                  )}
                </li>

                {/* =================================================
                    MOBILE BLOG
                ================================================== */}
                <li className="border-b border-gray-100">

                  <button
                    onClick={() => handleMobileMenu("blog")}
                    className="w-full flex items-center justify-between p-3 md:p-4 hover:bg-green-500 hover:text-white cursor-pointer"
                  >
                    <span>Blog</span>

                    <FaAngleDown
                      size={16}
                      className={`transition-transform duration-300 ${
                        mobileMenu === "blog"
                          ? "rotate-180"
                          : ""
                      }`}
                    />
                  </button>

                  {mobileMenu === "blog" && (
                    <ul className="bg-gray-50">

                      <li>
                        <Link
                          to="/blog"
                          onClick={() => setShow(false)}
                          className="block pl-8 p-3 hover:bg-green-500 hover:text-white"
                        >
                          Blog Grid
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/blog/details"
                          onClick={() => setShow(false)}
                          className="block pl-8 p-3 hover:bg-green-500 hover:text-white"
                        >
                          Blog Details
                        </Link>
                      </li>

                    </ul>
                  )}
                </li>

                {/* ABOUT */}
                <li>
                  <Link
                    to="/about"
                    onClick={() => setShow(false)}
                    className="flex items-center gap-2 p-3 md:p-4 hover:bg-green-500 hover:text-white cursor-pointer"
                  >
                    About Us
                  </Link>
                </li>

                {/* CONTACT */}
                <li>
                  <Link
                    to="/contact"
                    onClick={() => setShow(false)}
                    className="flex items-center gap-2 p-3 md:p-4 hover:bg-green-500 hover:text-white cursor-pointer"
                  >
                    Contact Us
                  </Link>
                </li>

              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
};