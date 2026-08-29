import { useEffect, useState } from 'react'
import { Container } from '../Layout/Container'
import axios from 'axios'
import { GoArrowRight } from "react-icons/go";
import { FaStar, FaStarHalfAlt, FaRegStar, FaHeart, FaEye, FaShoppingBag } from "react-icons/fa";
export const FreshVegetables = ({ filterOpen = true }) => {

 let [pro,setPro]=useState([])
    
 useEffect(() => {
  async function allpro() {
    const proData = await axios.get(
      "https://ecobazar-api.onrender.com/api/products?hotDeals=true&limit=12"
    );

    setPro(proData.data.data.products);
  }

  allpro();
}, []);

// Render stars for product ratings
    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

        for (let i = 0; i < fullStars; i++) {
            stars.push(<FaStar key={`full-${i}`} color="#FFC107" />);
        }
        if (hasHalfStar) {
            stars.push(<FaStarHalfAlt key="half" color="#FFC107" />);
        }
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<FaRegStar key={`empty-${i}`} color="#FFC107" />);
        }
        return stars;
    };

  return (
    <>
      <Container>
  <div className="main mt-[5px]">
    <div className={`grid grid-cols-2 sm:grid-cols-2 ${filterOpen ? 'lg:grid-cols-3' : 'lg:grid-cols-4'} gap-x-4 gap-y-4`}>
      {pro.map((item) => (
        <div
          key={item._id}
          className="
            w-full
            h-[300px]
            bg-white
            rounded-md
            border border-[#E5E5E5]
            relative
            group
            overflow-hidden
            transition-all
            duration-300
            hover:border-[#00B207]
            hover:shadow-[0_0_0_1px_#00B207]
          "
        >
          {/* Product Image */}
          <div className="h-[210px] p-3 flex items-center justify-center">
            <img
              src={item.thumbnail.url}
              alt={item.title.en}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Product Info */}
          <div className="px-2.5">
            <div className="flex justify-between items-end">
              <div>
                <h3 className="text-[14px] font-normal font-pop text-[#4D4D4D] hover:text-[#00B207]">
                  {item.title.en}
                </h3>

                <p className="text-[16px] font-medium font-pop text-[#1A1A1A]">
                  ${item.price}
                </p>

                <div className="flex gap-1 text-[14px] w-[60px] text-[#FF8A00]">
                  {renderStars(item.rating)}
                </div>
              </div>

              {/* Cart */}
              <button
                className="
                  w-8 h-8
                  bg-[#F2F2F2]
                  rounded-full
                  flex items-center justify-center
                  hover:bg-[#00B207]
                  hover:text-white
                  transition-colors
                "
              >
                <FaShoppingBag size={14} />
              </button>
            </div>
          </div>

          {/* Wishlist + Eye */}
          <div
            className="
              absolute
              top-3
              right-3
              flex flex-col gap-2
              opacity-0
              group-hover:opacity-100
              transition-opacity duration-300
            "
          >
            <button
              className="
                w-8 h-8
                bg-white
                rounded-full
                shadow
                flex items-center justify-center
                hover:bg-[#00B207]
                hover:text-white
                transition-colors
              "
            >
              <FaHeart size={14} />
            </button>

            <button
              className="
                w-8 h-8
                bg-white
                rounded-full
                shadow
                flex items-center justify-center
                hover:bg-[#00B207]
                hover:text-white
                transition-colors
              "
            >
              <FaEye size={14} />
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</Container>
    </>
  );
}
