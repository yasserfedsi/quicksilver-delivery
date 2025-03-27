import { useState } from "react";

export default function TrackOrder() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    { id: 1, label: "Order Confirmed" },
    { id: 2, label: "Picked by Courier" },
    { id: 3, label: "On the Way" },
    { id: 4, label: "Ready for Pickup" },
  ];

  return (
    <section className="bg-white text-orange-500 p-10 rounded-3xl shadow-lg w-full flex flex-col justify-center items-center border-4 border-orange-500 mt-10">
      {/* Title */}
      <h2 className="text-4xl font-bold text-center mb-8">Track My Order</h2>

      {/* Track Input & Button */}
      <div className="flex gap-6 mb-12 w-full max-w-2xl">
        <input
          type="text"
          placeholder="Your Order ID..."
          className="flex-1 p-5 border-4 border-orange-500 rounded-lg outline-none focus:ring-4 focus:ring-orange-500 text-gray-800 text-xl"
        />
        <button className="bg-primary hover:bg-primary text-white px-8 py-4 rounded-lg font-bold transition text-xl">
          Track !
        </button>
      </div>

      {/* Progress Bar */}
      <div className="relative flex items-center w-full max-w-4xl">
        {/* Active Progress Line */}
        <div
          className="absolute top-1/2 left-0 h-2 bg-orange-300 -z-10 transform -translate-y-1/2 transition-all duration-500"
          style={{
            width: `${((activeStep - 1) / (steps.length - 1)) * 100}%`,
          }}
        ></div>

        {steps.map((step, index) => (
          <div
            key={step.id}
            className="relative flex flex-col items-center flex-1"
          >
            {/* Circle */}
            <div
              className={`w-16 h-16 flex items-center justify-center rounded-full border-4 font-bold text-2xl transition-all duration-300 cursor-pointer ${
                activeStep >= step.id
                  ? "bg-orange-500 border-orange-500 text-white"
                  : "border-orange-300 text-orange-300"
              } hover:scale-110`}
              onClick={() => setActiveStep(step.id)}
            >
              {step.id}
            </div>

            {/* Line Between Steps */}
            {index < steps.length - 1 && (
              <div
                className={`absolute top-1/2 left-1/2 w-full h-2 -z-10 transition-all duration-500 ${
                  activeStep > step.id ? "bg-orange-500" : "bg-orange-300"
                }`}
              ></div>
            )}

            {/* Step Label */}
            <span className="mt-4 text-lg font-semibold text-center">
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
