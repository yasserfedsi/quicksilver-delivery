import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function PopupFooter() {
  const handleDownload = () => {
    const appLink = "https://play.google.com/";
    window.open(appLink, "_blank");
  };

  return (
    <footer className="bg-primary px-6 md:px-12 lg:px-16 mt-10 rounded-lg text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-16">
        {/* About Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p className="text-white/80 leading-relaxed mb-4">
            We provide fast, reliable, and hassle-free delivery services. Your
            satisfaction is our top priority.
          </p>
          <h3 className="text-lg font-semibold text-white/90">
            Why Choose Us?
          </h3>
          <ul className="text-white/80 list-disc list-inside mt-2 mb-4 space-y-1">
            <li>Real-time tracking</li>
            <li>Friendly delivery agents</li>
            <li>Eco-friendly options</li>
            <li>24/7 customer support</li>
          </ul>
        </div>

        {/* Contact & Social Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-white/80">
            📧 Email:{" "}
            <a
              href="mailto:support@quicksilver-delivery.com"
              className="hover:underline"
            >
              support@quicksilver-delivery.com
            </a>
          </p>
          <p className="text-white/80 mb-6">
            📞 Phone:{" "}
            <a href="tel:+2100000000" className="hover:underline">
              (+213) 000-00-00-00
            </a>
          </p>
          <h2 className="text-xl font-bold mb-3">Follow Us</h2>
          <div className="flex space-x-4">
            <FaFacebook className="text-2xl cursor-pointer hover:text-blue-500 transition-transform transform hover:scale-110" />
            <FaTwitter className="text-2xl cursor-pointer hover:text-blue-400 transition-transform transform hover:scale-110" />
            <FaInstagram className="text-2xl cursor-pointer hover:text-pink-500 transition-transform transform hover:scale-110" />
          </div>
        </div>

        {/* FAQ & Download App */}
        <div>
          <h2 className="text-2xl font-bold mb-4">FAQ</h2>
          <p className="text-white/80 leading-relaxed">
            Have questions? Check our{" "}
            <a href="/faq" className="text-orange-300 hover:underline">
              FAQ section
            </a>{" "}
            for answers on tracking, payment, and more.
          </p>
          <div className="mt-6">
            <h2 className="text-xl font-bold mb-3">Download Our App</h2>
            <p className="text-white/80 mb-4">
              Get the best delivery experience on the go.
            </p>
            <button
              className="bg-black text-white px-6 py-3 rounded-full text-lg font-bold hover:bg-gray-800 transition-transform transform hover:scale-105"
              onClick={handleDownload}
            >
              Download Now
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/30 w-full text-center py-4 text-white/80 text-sm">
        © 2025 Quicksilver. All Rights Reserved.
      </div>
    </footer>
  );
}
