import React, { useEffect, useRef, useState } from "react";
import PopPic from "../../assets/PopPic.webp";
import { useOutside } from "../Hooks/Outside";

const PopUp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");

  const popupRef = useRef(null);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  useOutside(popupRef, setIsOpen, isOpen);

  const closePopup = () => {
    setIsOpen(false);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) return;

    console.log("Subscribed:", email);

    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">

      {/* Popup */}
      <div
        ref={popupRef}
        className="relative w-full max-w-[990px] rounded-xl bg-white overflow-hidden"
      >
        {/* Close */}
        <button
          onClick={closePopup}
          className="absolute right-5 top-4 z-10 text-2xl text-gray-700 hover:text-red-500"
        >
          ×
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">

          {/* Image */}
          <div className="hidden md:block h-[500px]">
            <img
              src={PopPic}
              alt="Newsletter"
              className="p-2 w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex items-center justify-center p-8">
            <div className="w-full max-w-md text-center">

              <h2 className="text-[40px] font-pop font-semibold text-[#1A1A1A]">
                Subscribe to Our
                <br />
                Newsletter
              </h2>

              <p className="mt-5 text-[16px] font-pop font-normal text-[#999999]">
                Subscribe to our newsletter and Save your span
                <span className="ml-2 text-[16px] font-pop font-semibold text-orange-500">
                  20%
                </span>
                <br />
                <span className="text-[16px] font-pop font-semibold text-orange-500">
                  money
                </span>{" "}
                with discount code today.
              </p>

              <form
                onSubmit={handleSubscribe}
                className="mt-7 flex h-12 overflow-hidden rounded-full border border-[#999999]"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="min-w-0 flex-1 px-5 outline-none"
                />

                <button
                  type="submit"
                  className="rounded-full bg-[#00B207] px-7 font-semibold text-white"
                >
                  Subscribe
                </button>
              </form>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PopUp;