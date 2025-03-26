import { buttons } from "../../lib/utils";
import { images } from "../../lib/images";

export default function Navbar() {
  return (
    <div className="bg-white p-4 m-4 rounded-2xl relative shadow-lg flex flex-col items-center sm:items-stretch">
      <div className="absolute top-4 right-4 flex flex-col items-center border border-primary  shadow-md px-4 py-2 rounded-lg">
        <img
          src={images[10].src}
          alt="Navbar Image"
          className="w-12 h-12 object-cover"
        />
        <span className="text-primary font-medium mt-2">Admin</span>
      </div>

      <div className="flex flex-col sm:flex-row items-center w-full max-w-2xl mx-auto gap-4">
        {/* Search Bar */}
        <form className="flex-1 w-full">
          <div className="flex items-center border-2 border-primary rounded-full overflow-hidden">
            <input
              type="text"
              placeholder="Search something..."
              className="w-full px-4 py-2 text-primary text-center placeholder-primary focus:outline-none"
            />
          </div>
        </form>
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mt-4 flex-wrap">
        {buttons.map((item, index) => (
          <button
            key={index}
            className="px-6 py-2 text-sm text-primary bg-white border border-primary rounded-full hover:bg-primary hover:text-white focus:outline-none"
          >
            {item.text}
          </button>
        ))}
      </div>
    </div>
  );
}
