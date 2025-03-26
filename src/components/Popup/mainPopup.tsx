import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import PopupHeader from "./header";
import PopupContent from "./content";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Popup({ isOpen, onClose }: PopupProps) {
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

  // Close popup when the user presses "Escape"
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose(); // Close the popup
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60 backdrop-blur-md z-50">
      <div
        ref={popupRef}
        className="relative w-full h-full bg-white flex flex-col overflow-hidden"
      >
        <PopupHeader onClose={onClose} />
        <PopupContent onClose={onClose} />
      </div>
    </div>
  );
}
