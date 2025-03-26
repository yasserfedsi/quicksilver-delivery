import { useState } from "react";
import Popup from "../Popup/popup";
import { images } from "../../lib/images";

export default function Hero() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="relative w-full h-screen flex justify-center items-center overflow-hidden">
        <img
          src={images[11].src}
          alt={images[11].alt}
          className="w-1/2 h-auto cursor-pointer"
          onClick={() => setIsPopupOpen(true)}
        />
        <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />

      {/* Floating Boxes */}
      <img
        src={images[1].src}
        alt={images[1].alt}
        className="absolute top-[40%] left-[20%] w-44 -rotate-45 transform"
      />
      <img
        src={images[1].src}
        alt={images[1].alt}
        className="absolute top-10 right-[15%] w-44 rotate-45 transform"
      />

      {/* Boxes Text */}
      <p className="absolute top-[20%] left-[27%] text-white font-bold text-4xl">
        Your Time <br /> Our Priority
      </p>
      <p className="absolute bottom-[20%] left-[26%] text-white font-bold text-2xl">
        Fast-Track Your <br /> Shipments
      </p>
      <p className="absolute top-[20%] right-[21%] text-white font-bold text-6xl">
        Fast, <br /> Reliable, <br /> Affordable
      </p>
      <p className="absolute bottom-1/4 h-5 right-[20%] text-white font-bold text-2xl">
        On-Time, <br /> Every Time
      </p>
    </div>
  );
}
