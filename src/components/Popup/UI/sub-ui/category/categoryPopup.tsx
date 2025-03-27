import React, { useEffect, useRef, useState } from "react";
import ImageGrid from "../images-ui/imageGrid";
import { X } from "lucide-react";
import { gsap } from "gsap";

interface CategoryPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const CategoryPopup: React.FC<CategoryPopupProps> = ({ isOpen, onClose }) => {
  const popupRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      document.body.style.overflow = "hidden";

      setTimeout(() => {
        gsap.fromTo(
          popupRef.current,
          { y: "100%", opacity: 0 },
          { y: "0%", opacity: 1, duration: 0.8, ease: "power3.out" }
        );
      }, 10);
    } else if (visible) {
      document.body.style.overflow = "auto";

      gsap.to(popupRef.current, {
        y: "100%",
        opacity: 0,
        duration: 0.6,
        ease: "power3.in",
        onComplete: () => setVisible(false),
      });
    }
  }, [isOpen]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60 backdrop-blur-md z-50">
      <div
        ref={popupRef}
        className="relative w-full h-full bg-[#FF8303] flex flex-col overflow-hidden"
      >
        {/* Close Button (X) */}
        <button 
          className="absolute top-4 right-4 bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition"
          onClick={onClose}
        >
          <X size={24} />
        </button>

        <div className="flex-1 overflow-y-auto p-8">
          <ImageGrid />
        </div>
      </div>
    </div>
  );
};

export default CategoryPopup;
