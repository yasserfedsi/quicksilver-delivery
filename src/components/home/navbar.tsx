import { buttons } from "../../lib/buttons";
import { images } from "../../lib/images";

export default function Navbar() {
  return (
    <div className="bg-white p-4 m-4 rounded-2xl relative">
      {/* Image Box in Top-Right */}
      <div className="absolute top-4 right-4 w-12 h-12 border border-gray-300 bg-white shadow-md flex items-center justify-center">
        <button>
          <img
            src={images[10].src} // Replace with your actual image source
            alt="Navbar Image"
            className="w-full h-full object-cover"
          />
        </button>
      </div>

      <div className="flex items-center w-full max-w-2xl mx-auto">
        {/* Search Bar */}
        <form className="flex-1">
          <div className="flex items-center border-2 border-primary rounded-full overflow-hidden">
            <input
              type="text"
              placeholder="Search something..."
              className="w-full px-4 py-2 text-primary text-center placeholder-primary focus:outline-none"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-4 mt-4">
            {buttons.map((item, index) => (
              <button
                key={index}
                className="px-8 py-1 text-sm text-primary bg-white border border-primary rounded-full hover:bg-primary hover:text-white focus:outline-none"
              >
                {item.text}
              </button>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
}
