import { images } from "../../lib/images";
import DeliveryOptions from "./options/deliveryOptions";
import Categories from "./options/categories";
import Navbar from "../home/navbar";
import PopupPricing from "./options/pricing";
import PopupTrack from "./options/tracking";
import PopupFooter from "./options/footer";

export default function PopupContent({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex flex-col h-full">
      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto p-8">
        <Navbar />

        <h2 className="text-4xl font-bold text-primary mb-6 text-center">
          Special Offer!
        </h2>

        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="md:w-1/2 flex justify-center items-center rounded-lg">
            <img
              src={images[14]?.src}
              alt="Product"
              className="w-[95%] h-auto rounded-lg object-contain"
            />
          </div>
          <DeliveryOptions />
        </div>

        <h2 className="text-3xl font-bold text-gray-800 mt-12 mb-4 text-center">
          Explore More Categories
        </h2>
        <Categories onClose={onClose} />
        <PopupPricing />
        <PopupTrack />
        <PopupFooter />
      </div>
    </div>
  );
}
