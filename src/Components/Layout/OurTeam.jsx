import React, { useState } from 'react';
import TeamOne from '../../assets/teamone.webp';
import TeamTwo from '../../assets/teamtwo.webp';
import TeamThree from '../../assets/teamthree.webp';
import TeamFour from '../../assets/teamfour.webp';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaTwitter, 
  FaPinterestP, 
  FaChevronLeft, 
  FaChevronRight 
} from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Container } from './Container';

const teamData = [
  { img: TeamOne, name: 'Jenny Wilson', role: 'Ceo & Founder' },
  { img: TeamFour, name: 'Jane Cooper', role: 'Worker' },
  { img: TeamThree, name: 'Cody Fisher', role: 'Security Guard' },
  { img: TeamTwo, name: 'Robert Fox', role: 'Senior Farm Manager' },
];

const team = [...teamData, ...teamData];

const OurTeam = () => {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  return (
    <div className="w-full overflow-hidden bg-[#F8F8F8] py-10 sm:py-14 md:py-16">
      <Container>
        {/* Header Section */}
        <div className="text-center max-w-lg mx-auto mb-8 sm:mb-10 md:mb-12 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-hsize font-semibold mb-2 sm:mb-3">
            Our Awesome Team
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
            Pellentesque a ante suscipit, luctus tellus vel eget arcu. Nulla
            sem convallis ut lectus tincidunt bibendum.
          </p>
        </div>

        {/* Swiper Slider Container */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Custom Prev Button */}
          <button
            ref={(node) => setPrevEl(node)}
            aria-label="Previous Slide"
            className="hidden md:flex shrink-0 w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-white shadow items-center justify-center hover:bg-primary hover:text-white transition cursor-pointer z-10 select-none"
          >
            <FaChevronLeft size={14} />
          </button>

          {/* Swiper Slider */}
          <div className="flex-1 overflow-hidden">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={16}
              slidesPerView={1}
              loop={true}
              grabCursor={true}
              breakpoints={{
                480: {
                  slidesPerView: 1.5,
                  spaceBetween: 16,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 24,
                },
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevEl;
                swiper.params.navigation.nextEl = nextEl;
              }}
              navigation={{
                prevEl,
                nextEl,
              }}
              className="mySwiper !pb-2"
            >
              {team.map(({ img, name, role }, i) => (
                <SwiperSlide key={i}>
                  <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-300 h-full">
                    {/* Image Container with Light Blur & Dark Overlay */}
                    <div className="relative overflow-hidden aspect-[4/3] sm:aspect-auto sm:h-60 md:h-56 lg:h-60">
                      <img
                        src={img}
                        alt={name}
                        className="w-full h-full object-cover transition duration-300 group-hover:blur-[2px]"
                      />

                      {/* Hover Overlay & Social Links */}
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                        <a
                          href="https://www.facebook.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Facebook"
                          className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-primary hover:text-white transition duration-300"
                        >
                          <FaFacebookF size={12} />
                        </a>
                        <a
                          href="https://www.twitter.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Twitter"
                          className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-primary hover:text-white transition duration-300"
                        >
                          <FaTwitter size={12} />
                        </a>
                        <a
                          href="https://www.pinterest.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Pinterest"
                          className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-primary hover:text-white transition duration-300"
                        >
                          <FaPinterestP size={12} />
                        </a>
                        <a
                          href="https://www.instagram.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Instagram"
                          className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-primary hover:text-white transition duration-300"
                        >
                          <FaInstagram size={12} />
                        </a>
                      </div>
                    </div>

                    <div className="p-4">
                      <h4 className="text-sm sm:text-base font-semibold text-gray-800">{name}</h4>
                      <p className="text-xs text-gray-400 mt-0.5">{role}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Custom Next Button */}
          <button
            ref={(node) => setNextEl(node)}
            aria-label="Next Slide"
            className="hidden md:flex shrink-0 w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-white shadow items-center justify-center hover:bg-primary hover:text-white transition cursor-pointer z-10 select-none"
          >
            <FaChevronRight size={14} />
          </button>
        </div>
      </Container>
    </div>
  );
};

export default OurTeam;