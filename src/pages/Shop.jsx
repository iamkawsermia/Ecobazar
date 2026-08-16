import React, { useState } from 'react';
import { 
   FiChevronDown, FiHeart, FiEye, FiShoppingBag,
   FiStar, FiChevronLeft, FiChevronRight 
} from 'react-icons/fi';

import PopularTags from '../Components/PopularTags';
import { FreshVegetables } from '../Components/ProductApi/FreshVegetables';
import Filter from '../assets/Filter.png'
import ShopD from '../assets/ShopD.webp'

import { Container } from '../Components/Layout/Container';

const SIDEBAR_CATEGORIES = [
  { name: 'Fresh Fruit', count: 134, active: true },
  { name: 'Vegetables', count: 150, active: false },
  { name: 'Cooking', count: 54, active: false },
  { name: 'Snacks', count: 47, active: false },
  { name: 'Beverages', count: 43, active: false },
  { name: 'Beauty & Health', count: 38, active: false },
  { name: 'Bread & Bakery', count: 15, active: false },
];

export default function ShopPage() {
  const [priceRange, setPriceRange] = useState(1000);

  const [selectedCategory, setSelectedCategory] = useState(
    SIDEBAR_CATEGORIES.find((cat) => cat.active)?.name || ""
  );
  // Toggle states for filter dropdowns
  const [showCategories, setShowCategories] = useState(false);
  const [showPrice, setShowPrice] = useState(false);
  const [showRating, setShowRating] = useState(false);
  const [showTags, setShowTags] = useState(false);
  const [showAllFilters, setShowAllFilters] = useState(true);

  return (
    <>
      <Container>
        <div className=" bg-white font-sans text-gray-800 p-4 md:p-8">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
            {/* ================= SIDEBAR ================= */}
            <aside className="w-full lg:w-[312px] flex-shrink-0 space-y-8">
              {/* Filter Button Header */}
              <div 
                onClick={() => setShowAllFilters(!showAllFilters)}
                className="inline-flex items-center py-[14px] px-[32px] bg-[#00B207] text-white text-[14px] font-pop font-semibold rounded-full cursor-pointer transition-opacity hover:opacity-90">
                <span className="flex items-center gap-x-3">
                  Filter
                  <img src={Filter} alt="Filter" />
                </span>
              </div>

              {showAllFilters && (
                <>
                  {/* All Categories */}
                  <div>
                    <div className="flex items-center justify-between  text-[#1A1A1A] mb-4 text-[20px] font-medium font-pop" onClick={() => setShowCategories(!showCategories)} style={{cursor: 'pointer'}}>
                      <h3>All Categories</h3>
                      <FiChevronDown className={`text-[20px] text-[#1A1A1A] transition-transform ${showCategories ? 'transform rotate-180' : ''}`} />
                    </div>

                    {showCategories && (
                      <ul className="space-y-3">
                        {SIDEBAR_CATEGORIES.map((cat, idx) => (
                          <li key={idx} className="flex items-center gap-1 text-sm cursor-pointer">
                            <label className="flex items-center gap-3 cursor-pointer" onClick={() => setSelectedCategory(cat.name)}>
                              <input
                                type="radio"
                                name="category"
                                checked={selectedCategory === cat.name}
                                onChange={() => setSelectedCategory(cat.name)}
                                className="accent-green-600 w-4 h-4"
                              />

                              <span
                                className={selectedCategory === cat.name ? "text-[#1A1A1A] font-normal font-pop text-[14px]" : "text-gray-600"}
                              >
                                {cat.name}
                              </span>
                            </label>

                            <span className="text-gray-400">({cat.count})</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <hr className="border-gray-100" />

                  {/* Price Range */}
                  <div>
                    <div className="flex items-center justify-between font-medium text-[#1A1A1A] mb-4 text-[20px] font-pop" onClick={() => setShowPrice(!showPrice)} style={{cursor: 'pointer'}}>
                      <h3>Price</h3>
                      <FiChevronDown className={`text-[20px] text-[#1A1A1A] transition-transform ${showPrice ? 'transform rotate-180' : ''}`} />
                    </div>
                    {showPrice && (
                      <>
                        <input
                          type="range"
                          min="10"
                          max="1500"
                          value={priceRange}
                          onChange={(e) => setPriceRange(e.target.value)}
                          className="w-full accent-[#00B207] cursor-pointer bg-gray-200 h-1.5 rounded-lg"
                        />
                        <div className="text-sm text-gray-600 mt-2">
                          Price:{' '}
                          <span className="font-semibold text-gray-900">
                            10 – {priceRange}
                          </span>
                        </div>
                      </>
                    )}
                  </div>

                  <hr className="border-gray-100" />

                  {/* Rating Filter */}
                  <div>
                    <div className="flex items-center justify-between font-medium font-pop text-[#1A1A1A] mb-4 text-[20px]" onClick={() => setShowRating(!showRating)} style={{cursor: 'pointer'}}>
                      <h3>Rating</h3>
                      <FiChevronDown className={`text-[20px] text-[#1A1A1A] transition-transform ${showRating ? 'transform rotate-180' : ''}`} />
                    </div>
                    {showRating && (
                      <div className="space-y-3">
                        {[5, 4, 3, 2, 1].map((stars, idx) => (
                          <label key={idx} className="flex items-center gap-3 text-sm font-pop font-normal text-[#1A1A1A] cursor-pointer">
                            <input
                              type="checkbox"
                              defaultChecked={stars === 4}
                              className="accent-green-600 w-4 h-4 rounded border-gray-300"
                            />
                            <div className="flex text-[#FF8A00]">
                              {[...Array(5)].map((_, i) => (
                                <FiStar
                                  key={i}
                                  className={i < stars ? "fill-[#FF8A00]" : "text-gray-300"}
                                  size={14}
                                />
                              ))}
                            </div>
                            <span className={stars === 0 ? "text-[#1A1A1A] font-normal" : "text-[#1A1A1A]"}>
                              {stars}.0 & up
                            </span>
                          </label>
                        ))}
                      </div>
                    )}
                  </div>

                  <hr className="border-gray-100" />

                  {/* Popular Tags */}
                  <div>
                    <div className="flex items-center justify-between font-medium font-pop text-[#1A1A1A] mb-4 text-[20px]" onClick={() => setShowTags(!showTags)} style={{cursor: 'pointer'}}>
                      <h3>Popular Tags</h3>
                      <FiChevronDown className={`text-[20px] text-[#1A1A1A] transition-transform ${showTags ? 'transform rotate-180' : ''}`} />
                    </div>
                    {showTags && <PopularTags />}
                  </div>

                  {/* Promotional Banner */}
                  <div className=''>
                    <img src={ShopD} alt="ShopD" />
                  </div>
                </>
              )}

            </aside>

            {/* ================= MAIN CONTENT ================= */}
            <main className="flex-1">
              {/* Top Bar / Sorting */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between  p-4 rounded-lg mb-6 gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span>Sort by:</span>
                  <select className="bg-white border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-emerald-500">
                    <option>Latest</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Rating</option>
                  </select>
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  <span className="text-gray-900 font-bold">52</span> Results
                  Found
                </div>
              </div>

              {/* Product Grid */}
              <div className="">
                <FreshVegetables />
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-center gap-2 mt-12">
                <button
                  aria-label="Previous Page"
                  className="w-9 h-9 border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100"
                >
                  <FiChevronLeft size={16} />
                </button>
                <button className="w-9 h-9 bg-emerald-500 text-white rounded-full font-medium text-sm flex items-center justify-center shadow-sm">
                  1
                </button>
                <button className="w-9 h-9 border border-gray-200 rounded-full text-gray-700 text-sm font-medium flex items-center justify-center hover:bg-gray-100">
                  2
                </button>
                <button className="w-9 h-9 border border-gray-200 rounded-full text-gray-700 text-sm font-medium flex items-center justify-center hover:bg-gray-100">
                  3
                </button>
                <button className="w-9 h-9 border border-gray-200 rounded-full text-gray-700 text-sm font-medium flex items-center justify-center hover:bg-gray-100">
                  4
                </button>
                <button className="w-9 h-9 border border-gray-200 rounded-full text-gray-700 text-sm font-medium flex items-center justify-center hover:bg-gray-100">
                  5
                </button>
                <span className="text-gray-400 px-1">...</span>
                <button className="w-9 h-9 border border-gray-200 rounded-full text-gray-700 text-sm font-medium flex items-center justify-center hover:bg-gray-100">
                  21
                </button>
                <button
                  aria-label="Next Page"
                  className="w-9 h-9 border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100"
                >
                  <FiChevronRight size={16} />
                </button>
              </div>
            </main>
          </div>
        </div>
      </Container>
    </>
  );
}



