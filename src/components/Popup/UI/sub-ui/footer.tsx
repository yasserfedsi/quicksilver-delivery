import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function PopupFooter() {
  return (
    <footer className="bg-primary px-6 md:px-12 lg:px-16 mt-10 rounded-lg text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-16">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold mb-2">About Us</h2>
          <p className="text-white/80 mb-4">
            We deliver fast, reliable, and hassle-free services to connect you
            with what matters most. Your satisfaction is our priority.
          </p>
          <h3 className="text-lg font-semibold text-white/90">
            Why Choose Us?
          </h3>
          <p className="text-white/80 mb-4">
            Real-time tracking, friendly delivery agents, eco-friendly options,
            24/7 support.
          </p>
          <h3 className="text-lg font-semibold text-white/90 mb-2">
            Follow Us
          </h3>
          {/* Social Media Icons */}
          <div className="flex space-x-4 mb-6">
            <FaFacebook className="text-2xl cursor-pointer hover:text-blue-500" />
            <FaTwitter className="text-2xl cursor-pointer hover:text-blue-400" />
            <FaInstagram className="text-2xl cursor-pointer hover:text-pink-500" />
          </div>
          <h2 className="text-lg font-bold mb-2">Download App</h2>
          <p className="text-white/80 mb-4">
            Get the best delivery experience on the go. Download now!
          </p>
          <button className="bg-black text-white px-6 py-2 rounded-full text-lg font-bold cursor-pointer hover:bg-gray-800 transition">
            Download Now
          </button>
        </div>

        {/* Contact & FAQ Section */}
        <div>
          <h2 className="text-xl font-bold mb-2">Contact Us</h2>
          <p className="text-white/80 mb-4">
            Email: support@quicksilver.com <br />
            Phone: (+21) 000-00-00-00
          </p>
          <h2 className="text-lg font-semibold mb-2">FAQ</h2>
          <p className="text-white/80 leading-relaxed">
            Have questions? Check out our FAQ section for quick answers about
            our delivery process, tracking, payment options, and more. If you
            can't find what you're looking for, our support team is always here
            to help!
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="w-full text-center py-4 text-black font-bold rounded-b-lg">
        © 2025 Quicksilver. All Rights Reserved.
      </div>
    </footer>
  );
}
