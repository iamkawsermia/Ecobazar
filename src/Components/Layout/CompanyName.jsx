import React, { useRef, useState } from 'react';
import vector from '../../assets/Vector.webp';
import mango from '../../assets/mango.webp';
import Group from '../../assets/Group.webp';
import food from '../../assets/food.webp';
import bookof from '../../assets/bookoff.webp';
import Group1 from '../../assets/gseries.webp';
import instagram from '../../assets/instagram.webp';
import instagram2 from '../../assets/instaone.webp';
import instagram3 from '../../assets/instatwo.webp';
import instagram4 from '../../assets/instathree.webp';
import instagram5 from '../../assets/instafour.webp';
import instagram6 from '../../assets/instafive.webp';

import { Container } from './Container';


const CompanyName = ({ hideInstagram = false }) => {
   
    // Store current image for modal
    const [currentImage, setCurrentImage] = useState(null);
    const openModal = (imgSrc) => {
        setCurrentImage(imgSrc);
    };
    const closeModal = () => {
        setCurrentImage(null);
    };

  return (
    <>
    <Container>
         <marquee behavior="" direction="" className="py-4 md:py-6">
          <div className='flex gap-6 md:gap-10 items-center'>
            <img src={vector} alt="vector" className="h-10 md:h-12 lg:h-auto" />
            <img src={mango} alt="mango" className="h-10 md:h-12 lg:h-auto" />
            <img src={Group} alt="Group" className="h-10 md:h-12 lg:h-auto" />
            <img src={food} alt="food" className="h-10 md:h-12 lg:h-auto" />
            <img src={bookof} alt="bookof" className="h-10 md:h-12 lg:h-auto" />
            <img src={Group1} alt="Group1" className="h-10 md:h-12 lg:h-auto" />
          </div>
         </marquee>

         {
          !hideInstagram &&
            <div className="py-8 md:py-10">
        <h2 className='text-2xl md:text-[32px] font-pop font-semibold text-[#1A1A1A] text-center mb-6 md:mb-8'>Follow us on Instagram</h2>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4'>
          <img onClick={()=>openModal(instagram)} src={instagram} alt="instagram" className="w-full h-auto cursor-pointer hover:opacity-80 transition-opacity" />
          <img onClick={()=>openModal(instagram2)} src={instagram2} alt="instagram2" className="w-full h-auto cursor-pointer hover:opacity-80 transition-opacity" />
          <img onClick={()=>openModal(instagram3)} src={instagram3} alt="instagram3" className="w-full h-auto cursor-pointer hover:opacity-80 transition-opacity" />
          <img onClick={()=>openModal(instagram4)} src={instagram4} alt="instagram4" className="w-full h-auto cursor-pointer hover:opacity-80 transition-opacity" />
          <img onClick={()=>openModal(instagram5)} src={instagram5} alt="instagram5" className="w-full h-auto cursor-pointer hover:opacity-80 transition-opacity" />
          <img onClick={()=>openModal(instagram6)} src={instagram6} alt="instagram6" className="w-full h-auto cursor-pointer hover:opacity-80 transition-opacity" />
        </div>
       </div>
         }
     
    </Container>

  {currentImage && (
  <div
    onClick={closeModal}
    className="w-full h-screen fixed top-0 left-0 bg-[#0000007e] z-50 flex justify-center items-center p-4">
    <div
      onClick={(e)=>e.stopPropagation()}
      className="flex flex-col items-center gap-4 max-w-[90vw] max-h-[90vh]">
      <img src={currentImage} alt="instagram" className="w-full max-w-md md:max-w-lg h-auto object-contain"/>
      <button
        onClick={closeModal}
        className="text-white bg-black py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors">Close</button>
    </div>
  </div>
)}
    </>
  )
}

export default CompanyName