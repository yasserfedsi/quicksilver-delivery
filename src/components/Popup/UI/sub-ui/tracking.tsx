import { useState } from "react";
import { steps } from "../../../../lib/utils";

export default function TrackOrder() {
  const [orderId, setOrderId] = useState("");
  const [error, setError] = useState("");
  const [activeStep, setActiveStep] = useState(1);
  const totalSteps = steps.length;

  const handleTrackOrder = () => {
    if (!orderId.trim()) {
      setError("Please enter a valid Order ID.");
      return;
    }

    setError(""); // Clear previous errors if input is valid

    // Simulate tracking logic
    const newStep = Math.floor(Math.random() * totalSteps) + 1;
    setActiveStep(newStep);
  };

  return (
    <section className="bg-white text-orange-500 p-10 rounded-3xl shadow-lg w-full flex flex-col justify-center items-center border-4 border-orange-500 mt-10">
      <h2 className="text-4xl font-bold text-center mb-8">Track My Order</h2>

      {/* Error Message */}
      {error && (
        <div className="bg-red-500 text-white p-4 rounded-lg text-center w-full mb-4">
          {error}
        </div>
      )}

      {/* Track Input & Button */}
      <div className="flex gap-6 mb-12 w-full max-w-2xl">
        <input
          type="text"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          placeholder="Your Order ID..."
          className="flex-1 p-5 border-4 border-orange-500 rounded-lg outline-none focus:ring-4 focus:ring-orange-500 text-gray-800 text-xl"
        />
        <button
          onClick={handleTrackOrder}
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold transition text-xl"
        >
          Track!
        </button>
      </div>

      {/* Progress Bar */}
      <div className="relative flex items-center w-full max-w-4xl">
        {/* Background Line */}
        <div className="absolute top-1/2 left-0 right-0 h-2 bg-orange-300 -z-10 transform -translate-y-1/2"></div>

        {/* Active Progress Line */}
        <div
          className="absolute top-1/2 left-0 h-2 bg-orange-500 -z-10 transform -translate-y-1/2 transition-all duration-500"
          style={{
            width: `${((activeStep - 1) / (totalSteps - 1)) * 100}%`,
          }}
        ></div>

        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div
              key={step.id}
              className="relative flex flex-col items-center flex-1"
            >
              {/* Step Circle */}
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-full border-4 transition-all duration-300 cursor-pointer ${
                  activeStep >= step.id
                    ? "bg-orange-500 border-orange-500 text-white"
                    : "border-orange-300 text-orange-300"
                } hover:scale-110`}
                onClick={() => setActiveStep(step.id)}
              >
                <Icon
                  className={`w-8 h-8 ${
                    activeStep >= step.id ? "text-white" : "text-orange-300"
                  }`}
                />
              </div>

              {/* Step Label */}
              <span className="mt-4 text-lg font-semibold text-center">
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
