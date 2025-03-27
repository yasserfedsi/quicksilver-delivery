import { useState } from "react";
import { moreCategories } from "../../../../../lib/utils";
import CategoryPopup from "./categoryPopup";

export default function Categories() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleImageClick = (category: any) => {
    setSelectedCategory(category);
    setIsPopupOpen(true);
  };

  return (
    <section id="categories" className="mt-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {moreCategories.map((category, index) => (
          <div
            key={index}
            className="p-6 border-4 border-primary rounded-lg text-center flex flex-col items-center bg-white shadow-md uppercase text-primary"
          >
            <img
              src={category.img}
              alt={category.title}
              onClick={() => handleImageClick(category)}
              className="w-18 h-16 mb-2 cursor-pointer"
            />
            <p className="text-2xl font-bold">{category.title}</p>
            <p className="mt-2 text-gray-600">{category.desc}</p>
          </div>
        ))}
      </div>

      {/* Category Popup */}
      {selectedCategory && (
        <CategoryPopup
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
          category={selectedCategory}
        />
      )}
    </section>
  );
}
