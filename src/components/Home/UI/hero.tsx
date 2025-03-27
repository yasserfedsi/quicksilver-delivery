import { useState } from "react";
import Popup from "../../Popup/page";
import { images } from "../../../lib/images";

export default function Hero() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="relative w-full h-screen flex justify-center items-center overflow-hidden px-4 md:px-0">
      <img
        src={images[11].src}
        alt={images[11].alt}
        className="w-3/4 md:w-1/2 h-auto cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
        onClick={() => setIsPopupOpen(true)}
      />
      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />

      {/* Floating Boxes */}
      <img
        src={images[1].src}
        alt={images[1].alt}
        className="absolute top-[30%] left-[10%] md:top-[40%] md:left-[20%] w-24 md:w-44 -rotate-45 transform"
      />
      <img
        src={images[1].src}
        alt={images[1].alt}
        className="absolute top-5 right-[10%] md:top-10 md:right-[15%] w-24 md:w-44 rotate-45 transform"
      />

      {/* Boxes Text */}
      <p className="absolute top-[15%] left-[15%] md:top-[20%] md:left-[27%] text-white font-bold text-lg md:text-4xl text-center">
        Your Time <br /> Our Priority
      </p>
      <p className="absolute bottom-[15%] left-[16%] md:bottom-[20%] md:left-[26%] text-white font-bold text-sm md:text-2xl text-center">
        Fast-Track Your <br /> Shipments
      </p>
      <p className="absolute top-[15%] right-[10%] md:top-[20%] md:right-[21%] text-white font-bold text-2xl md:text-6xl text-center">
        Fast, <br /> Reliable, <br /> Affordable
      </p>
      <p className="absolute bottom-1/4 right-[10%] md:right-[20%] text-white font-bold text-sm md:text-2xl text-center">
        On-Time, <br /> Every Time
      </p>
    </div>
  );
}