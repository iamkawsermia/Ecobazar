import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import {
  FiChevronUp,
  FiChevronDown,
  FiStar,
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiMinus,
  FiPlus,
  FiShoppingBag,
  FiHeart,
  FiCheckCircle,
  FiPercent,
  FiPlay,
} from 'react-icons/fi'
import { FaLeaf } from 'react-icons/fa'
// import PromoImage from '../assets/images/Video.webp'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { Container } from '../Components/Layout/Container'
import IconCode from '../Components/IconCode/IconCode'

const tabs = ['Descriptions', 'Additional Information', 'Customer Feedback']

const Details = () => {
  const [proData, setProData] = useState([])
  const [selectedImgIndex, setSelectedImgIndex] = useState(0)
  const [qty, setQty] = useState(1)
  const [activeTab, setActiveTab] = useState('Descriptions')
  const [isWishlist, setIsWishlist] = useState(false)

  // Hover Zoom States
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const thumbnailRef = useRef(null)

  useEffect(() => {
    async function allPro() {
      try {
        let response = await axios.get('https://dummyjson.com/products')
        const products = response.data.products
        setProData(products)
      } catch (error) {
        console.error( error)
      }
    }
    allPro()
  }, [])

  const singleProduct = proData[selectedImgIndex]

  const handleSelectImage = (index) => {
    setSelectedImgIndex(index)
    setQty(1)
    if (thumbnailRef.current) {
      const activeItem = thumbnailRef.current.children[index]
      if (activeItem) {
        activeItem.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'nearest',
        })
      }
    }
  }

  const handleNextImage = () => {
    if (proData.length === 0) return
    const nextIndex = (selectedImgIndex + 1) % proData.length
    handleSelectImage(nextIndex)
  }

  const handlePrevImage = () => {
    if (proData.length === 0) return
    const prevIndex = (selectedImgIndex - 1 + proData.length) % proData.length
    handleSelectImage(prevIndex)
  }

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - left) / width) * 100
    const y = ((e.clientY - top) / height) * 100
    setZoomPosition({ x, y })
  }

  if (!singleProduct) {
    return (
      <div className="py-20 text-center font-pop">
        <p className="text-red-500">No product found!</p>
      </div>
    )
  }

  const currentMainImage = singleProduct.images?.[0] || singleProduct.thumbnail
  const oldPrice = (
    singleProduct.price /
    (1 - singleProduct.discountPercentage / 100)
  ).toFixed(2)

  return (
    <section className="font-pop py-10">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex flex-row gap-4 items-start">
            <div className="flex flex-col items-center gap-2">
              <button
                type="button"
                onClick={handlePrevImage}
                aria-label="Previous Image"
                className="text-gray-400 hover:text-primary transition-colors p-1"
              >
                <FiChevronUp size={20} />
              </button>

              {/* Vertical Scrollable Thumbnail List */}
              <div
                ref={thumbnailRef}
                className="flex flex-col gap-3 overflow-y-auto max-h-[360px] py-1 px-1"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {proData.map((product, i) => (
                  <button
                    key={product.id ?? i}
                    onClick={() => handleSelectImage(i)}
                    className={`w-16 h-16 rounded-lg border ${
                      selectedImgIndex === i
                        ? "border-gray-900 shadow-sm"
                        : "border-gray-200 hover:border-gray-400 opacity-70 hover:opacity-100"
                    } p-1 cursor-pointer shrink-0 transition-all bg-white flex items-center justify-center`}
                  >
                    <img
                      src={product.thumbnail}
                      alt={product.title || `thumb-${i}`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={handleNextImage}
                aria-label="Next Image"
                className="text-gray-400 hover:text-primary transition-colors p-1"
              >
                <FiChevronDown size={20} />
              </button>
            </div>

            <div
              className="flex-1 bg-gray-50 rounded-2xl flex items-center justify-center p-6 h-[400px] relative overflow-hidden cursor-crosshair border border-gray-100"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onMouseMove={handleMouseMove}
            >
              <img
                src={currentMainImage}
                alt={singleProduct.title}
                className={`w-full h-full object-contain transition-opacity duration-200 ${
                  isHovered ? "opacity-0" : "opacity-100"
                }`}
              />

              {isHovered && (
                <div
                  className="absolute inset-0 pointer-events-none transition-all duration-75"
                  style={{
                    backgroundImage: `url(${currentMainImage})`,
                    backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                    backgroundSize: "220%",
                    backgroundRepeat: "no-repeat",
                  }}
                />
              )}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 whitespace-nowrap">
              <h1 className="text-[#1A1A1A] font-pop font-semibold text-[36px] truncate">
                {singleProduct.title}
              </h1>

              <span
                className={`shrink-0 text-xs font-semibold px-3 py-1 rounded-full ${
                  singleProduct.stock > 0
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {singleProduct.stock > 0 ? "In Stock" : "Out of Stock"}
              </span>
            </div>

            <div className="flex items-center  gap-6 mt-3">
              {/* Ratings + Reviews */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  {/* Stars */}
                  <div className="flex text-[#FF8A00]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FiStar
                        key={i}
                        size={16}
                        fill={
                          i < Math.floor(singleProduct.rating)
                            ? "currentColor"
                            : "none"
                        }
                        className={
                          i < Math.floor(singleProduct.rating)
                            ? ""
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>

                  {/* Review Count */}
                  <span className="text-sm text-gray-500 font-medium">
                    {singleProduct.reviews?.length || 0} Review
                  </span>
                </div>
              </div>

              {/* SKU */}
              <p className="text-[#1A1A1A] font-pop font-medium text-[16px]">
                SKU:{" "}
                <span className="text-[#666666] font-pop font-normal text-[14px]">
                  {" "}
                  {singleProduct.sku || singleProduct.id}{" "}
                </span>
              </p>
            </div>

            {/* Price */}

            <div className="flex items-center gap-3 border-b border-gray-100 pt-4 mt-4 pb-5">
              <span className="text-[#B3B3B3] font-pop font-normal text-[20px]">
                ${oldPrice}
              </span>
              <span className="text-[#2C742F] font-pop font-medium text-[24px]">
                ${singleProduct.price}
              </span>
              <span className="flex items-center gap-1 text-sm font-pop font-medium bg-red-100 text-red-600  px-2.5 py-1 rounded-full">
                <FiPercent size={12} />{" "}
                {Math.round(singleProduct.discountPercentage)}% Off
              </span>
            </div>

            <div className="flex items-center justify-between gap-6 mt-6">
              {/* Brand */}
              {singleProduct.brand && (
                <div className="flex items-center gap-2">
                  <span className="text-[#1A1A1A] font-pop font-normal text-[16px]">
                    Brand:
                  </span>

                  <FaLeaf size={16} className="text-praimary" />

                  <span className="text-sm font-semibold text-[#1A1A1A]">
                    {singleProduct.brand}
                  </span>
                </div>
              )}

              {/* Social Share */}
              <div className="flex items-center gap-1 ">
                <span className="text-[#1A1A1A] font-pop font-normal text-[16px]">
                  Share Item:
                </span>

                <IconCode />
              </div>
            </div>

            <p className="text-sm text-gray-500 leading-relaxed mt-4 max-w-md">
              {singleProduct.description}
            </p>
            {/* Cart Actions */}
            <div className="flex items-center gap-4 border-t border-gray-100 pt-4 mt-6">
              <div className="flex items-center border border-gray-200 rounded-full px-4 py-2">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className=" flex w-8 h-8 bg-[#F2F2F2] text-black text-center items-center justify-center rounded-full  hover:text-praimary transition-colors"
                >
                  <FiMinus size={20} />
                </button>
                <span className="w-8 text-center text-[16px] font-normal font-pop text-[#1A1A1]">
                  {qty}
                </span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className=" flex w-8 h-8 bg-[#F2F2F2] text-black text-center items-center justify-center rounded-full  hover:text-praimary transition-colors"
                >
                  <FiPlus size={20} className=" " />
                </button>
              </div>

              <button className="flex items-center gap-2 bg-praimary text-white px-40 py-3 rounded-full text-[14px] font-pop font-semibold hover:opacity-90 transition-all shadow-sm">
                Add to Cart <HiOutlineShoppingBag size={20} />
              </button>

              <button
                onClick={() => setIsWishlist(!isWishlist)}
                className={`w-11 h-11 rounded-full border flex items-center justify-center transition-colors ${
                  isWishlist
                    ? "border-red-500 text-red-500 bg-red-50"
                    : "border-gray-200 bg-[#E9F8EA] text-praimary hover:text-praimary hover:border-praimary :"
                }`}
              >
                <FiHeart
                  size={16}
                  fill={isWishlist ? "currentColor" : "none"}
                />
              </button>
            </div>

            {/* Category & Tags */}
            <div className="mt-6 space-y-2 text-sm border-t border-gray-100 pt-4">
              <p className="text-[#1A1A1A] font-pop font-medium text-sm">
                Category:{" "}
                <span className="text-[#808080] font-normal font-pop text-sm capitalize">
                  {singleProduct.category}
                </span>
              </p>
              {singleProduct.tags && (
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[#1A1A1A] font-pop font-medium text-sm">
                    Tags:
                  </span>
                  {singleProduct.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600 capitalize"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Dynamic Tabs */}
        <div className="border-b border-gray-200 mt-12 flex justify-center gap-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 text-sm font-semibold transition-all ${
                activeTab === tab
                  ? "text-gray-900 border-b-2 border-primary"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-8">
          <div className="lg:col-span-2 text-sm text-gray-500 leading-relaxed">
            {activeTab === "Descriptions" && (
              <div className="space-y-4">
                <p>{singleProduct.description}</p>
                <ul className="space-y-2 pt-2">
                  <li className="flex items-center gap-2">
                    <FiCheckCircle
                      size={16}
                      className="text-primary shrink-0"
                    />
                    <span>Weight: {singleProduct.weight}g</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FiCheckCircle
                      size={16}
                      className="text-primary shrink-0"
                    />
                    <span>
                      Dimensions: {singleProduct.dimensions?.width} x{" "}
                      {singleProduct.dimensions?.height} x{" "}
                      {singleProduct.dimensions?.depth} cm
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FiCheckCircle
                      size={16}
                      className="text-primary shrink-0"
                    />
                    <span>Warranty: {singleProduct.warrantyInformation}</span>
                  </li>
                </ul>
              </div>
            )}

            {activeTab === "Additional Information" && (
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-4 border-b pb-2">
                  <span className="font-medium text-gray-700">
                    Minimum Order Quantity
                  </span>
                  <span>{singleProduct.minimumOrderQuantity} units</span>
                </div>
                <div className="grid grid-cols-2 gap-4 border-b pb-2">
                  <span className="font-medium text-gray-700">
                    Return Policy
                  </span>
                  <span>{singleProduct.returnPolicy}</span>
                </div>
              </div>
            )}

            {activeTab === "Customer Feedback" && (
              <div className="space-y-4">
                {singleProduct.reviews?.map((review, i) => (
                  <div key={i} className="border-b pb-3">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-gray-900">
                        {review.reviewerName}
                      </span>
                      <span className="text-xs text-gray-400">
                        {review.date?.slice(0, 10)}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {review.comment}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* ==== promp image ==== */}
          <div>
            <div className="relative rounded-2xl overflow-hidden bg-gray-100 h-60">
              {/* <img
                    src={PromoImage}
                    alt="Promo Image"
                    className="w-full h-full object-cover"
                  /> */}
              <button
                type="button"
                className="absolute inset-0 flex items-center justify-center group"
              >
                <span className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                  <FiPlay
                    size={20}
                    className="text-white ml-0.5"
                    fill="currentColor"
                  />
                </span>
              </button>
            </div>

            {/* Feature Badges */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="border border-gray-100 rounded-2xl p-4 flex items-start gap-2">
                <FiPercent size={18} className="text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    {Math.round(singleProduct.discountPercentage)}% Discount
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Save your {Math.round(singleProduct.discountPercentage)}%
                    money with us
                  </p>
                </div>
              </div>
              <div className="border border-gray-100 rounded-2xl p-4 flex items-start gap-2">
                <FaLeaf size={18} className="text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    100% Organic
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    100% Organic Vegetables
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ====Related Products===== */}
        <div></div>
      </Container>
    </section>
  );
}

export default Details