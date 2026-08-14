
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const PopularTags = () => {


const [selectedTag, setSelectedTag] = useState("Low fat"); // default selected
const POPULAR_TAGS = [
  'Healthy', 'Low fat', 'Vegetarian', 'Kid foods', 'Vitamins', 
  'Bread', 'Meat', 'Snacks', 'Tiffin', 'Launch', 'Dinner', 'Breakfast', 'Fruit'
];

  return (
    <>
    <div>
  <div className="flex items-center justify-between font-medium font-pop text-[#1A1A1A] mb-5 text-[20px]">
    
  </div>

  <div className="grid grid-cols-3 text-center gap-2">
    {POPULAR_TAGS.map((tag, idx) => (
      <span
        key={idx}
        onClick={() => setSelectedTag(tag)}
        className={`text-[14px] px-3 py-1.5 rounded-full cursor-pointer transition-all duration-200 ${
          selectedTag === tag
            ? "bg-[#00B207] text-white font-normal font-pop"
            : "bg-[#F2F2F2] text-[#1A1A1A] hover:bg-gray-200 "
        }`}
      >
        {tag}
      </span>
    ))}
  </div>
</div>
    </>
  )
}

export default PopularTags;
