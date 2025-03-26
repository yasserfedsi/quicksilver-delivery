import { deliveryOptions } from "../../lib/utils";

export default function DeliveryOptions() {
  return (
    <div className="w-full md:w-1/2 flex flex-col gap-6">
      {deliveryOptions.map((option, index) => (
        <div
          key={index}
          className="p-6 border-4 border-primary rounded-lg flex items-center gap-4 bg-white shadow-lg"
        >
          <img
            src={option.img}
            alt={option.title}
            className={`object-contain ${option.className}`}
          />
          <div>
            <p className="text-2xl font-bold text-orange-600">{option.title}</p>
            <p className="text-gray-600">{option.desc}</p>
            <button className="mt-2 bg-orange-500 text-white px-4 py-2 rounded">
              Check Now!
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
