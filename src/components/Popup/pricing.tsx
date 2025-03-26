import { plans } from "../../lib/utils";

export default function PopupPricing() {
  return (
    <section className="bg-primary text-white py-12 px-8 rounded-3xl shadow-lg w-full min-h-[50vh] flex flex-col justify-center mt-10">
      <h2 className="text-3xl font-bold text-center mb-6">
        Affordable Pricing Plans
      </h2>

      <div className="flex flex-col gap-6 w-full px-4">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white text-orange-500 p-6 rounded-2xl flex items-center justify-between shadow-lg border border-orange-300 w-full relative"
          >
            {/* Left Side: Plan Title & Description */}
            <div className="flex flex-col">
              <h3 className="text-lg font-bold">{plan.title}</h3>
              <p className="text-sm text-orange-700">{plan.description}</p>
            </div>

            {/* Right Side: Price Button */}
            <button className="bg-primary hover:bg-primary-700 text-white px-6 py-3 rounded-full text-lg font-bold transition absolute right-6 shadow-md">
              {plan.price}{" "}
              <span className="text-sm font-light">/{plan.per}</span>
            </button>
          </div>
        ))}
      </div>

      {/* Centered Button */}
      <div className="text-center mt-8">
        <button className="bg-white text-orange-500 px-8 py-4 rounded-full font-semibold hover:bg-primary hover:text-white transition shadow-md">
          View Full Pricing
        </button>
      </div>
    </section>
  );
}
