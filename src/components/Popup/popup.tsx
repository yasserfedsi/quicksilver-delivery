import { useEffect, useRef } from "react";
import { images } from "../../lib/images";
import { gsap } from "gsap";
import { deliveryOptions, moreCategories } from "../../lib/utils";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Popup({ isOpen, onClose }: PopupProps) {
  const popupRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling on the homepage
      gsap.fromTo(
        popupRef.current,
        { y: "100%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 0.8, ease: "power3.out" }
      );
    } else {
      document.body.style.overflow = "auto"; // Restore scrolling when popup closes
      gsap.to(popupRef.current, {
        y: "100%",
        opacity: 0,
        duration: 0.6,
        ease: "power3.in",
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60 backdrop-blur-md z-50">
      {/* Full-Screen Popup */}
      <div
        ref={popupRef}
        className="relative w-full h-full bg-white flex flex-col overflow-hidden"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg z-10"
        >
          Close
        </button>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-8">
          {/* Header */}
          <h2 className="text-4xl font-bold text-primary mb-6 text-center">
            Special Offer!
          </h2>

          {/* Delivery Options Section */}
          <div className="flex flex-col md:flex-row gap-6 items-center">
            {/* Product Image */}
            <div className="md:w-1/2 flex justify-center items-center rounded-lg">
              <img
                src={images[14]?.src} // Replace with actual product image
                alt="Product"
                className="w-[95%] h-auto rounded-lg object-contain"
              />
            </div>

            {/* Delivery Options */}
            <div className="w-full md:w-1/2 flex flex-col gap-6">
              {deliveryOptions.map((option, index) => (
                <div
                  key={index}
                  className="p-6 border-4 border-primary rounded-lg flex items-center gap-4 bg-white shadow-lg"
                >
                  <img
                    src={option.img}
                    alt={option.title}
                    className="w-16 h-16 object-contain"
                  />
                  <div>
                    <p className="text-2xl font-bold text-orange-600">
                      {option.title}
                    </p>
                    <p className="text-gray-600">{option.desc}</p>
                    <button className="mt-2 bg-orange-500 text-white px-4 py-2 rounded">
                      Check Now!
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Categories Section */}
          <h2 className="text-3xl font-bold text-gray-800 mt-12 mb-4 text-center">
            Explore More Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {moreCategories.map((category, index) => (
              <div
                key={index}
                className="p-6 border-4 border-primary rounded-lg text-center flex flex-col items-center bg-white shadow-md uppercase text-primary"
              >
                <img
                  src={category.img}
                  alt={category.title}
                  onClick={onClose} // Fix: This now properly closes the popup
                  className="w-16 h-16 mb-2 cursor-pointer"
                />
                <p className="text-2xl font-bold">{category.title}</p>
                <p className="mt-2 text-gray-600">{category.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Fixed Footer */}
        <div className="bg-gray-100 py-4 px-6 text-center border-t">
          <p className="text-gray-700">
            © 2025 Quicksilver Delivery | All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}
