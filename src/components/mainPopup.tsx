import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import PopupHeader from "./Popup/header";
import PopupContent from "./Popup/content";
import PopupFooter from "./Popup/footer";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Popup({ isOpen, onClose }: PopupProps) {
  const popupRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      gsap.fromTo(
        popupRef.current,
        { y: "100%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 0.8, ease: "power3.out" }
      );
    } else {
      document.body.style.overflow = "auto";
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
      <div
        ref={popupRef}
        className="relative w-full h-full bg-white flex flex-col overflow-hidden"
      >
        <PopupHeader onClose={onClose} />
        <PopupContent onClose={onClose} />
        <PopupFooter />
      </div>
    </div>
  );
}
