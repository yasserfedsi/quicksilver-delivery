import React from "react";

const Footer = () => {
    return (
             
        <footer className="bg-[#FF8303] px-4 md:px-0 lg:px-0 ">
            <div className="grid grid-cols-2 gap-6 sm:px-8 px-5 py-16">
             <div className="text-white w-max mb-4 text-lg text-sm text-left  pl-0">
                <h2 className="text-lg font-bold ">About Us</h2>
                <p className="text-white-300 mb-4">we deliver fast, reliable, and hassle-free services to connect you with what matters most. Your satisfaction is our priority</p>
                <h4 className="text-lg text-white-500">why Choose Us ? </h4>
                <p className="text-white-300 mb-4">Real-time tracking, freindly delivery agents, eco-freindly options, 24/7 support</p>
                <h4 className=" text-lg text-white-500 mb-4" >Follow Us</h4>
                <h2 className="text-lg font-bold" > Download App</h2>
                <p className="text-white-300 mb-4 ">Get the best delivery experience on the go. Download now!</p>
                <button className="bg-black text-white px-10 py-2 rounded-full text-lg font-bold cursor-pointer hover:bg-gray-800 transtion">Download now !</button>

             </div>
              <div className=" mx-96 w-64 h-32 mb-4 text-white text-lg p-0">
            
                <h2 className="font-bold text-sm ">CONTACT US</h2>
                <p className="mb-4 text-lg text-sm">email: support@ quicksilver.com <br></br>
                    phone: (+21) 000-00-00-00
                </p>
                <div className=" text-sm leading-tight">
                <h2 className="font-semibold text-lg">FAQ</h2>
               <p className=" text-sm leading-relaxed">Have questions? Check out our FAQ section for quick answers about our delivery process, trancking, payment options, and more, If you can't find what you're looking for,our support team is always here to help!</p>
                </div>
             </div> 
             </div>
            <div>
                <h2 className="w-full text-center py-4 bg-orange-#FF8303 text-black-absolute font-bold bottom-0">© 2025 Quicksilver. All Rights Reserved.</h2>
            </div>
          
        </footer>
    )
}
export default Footer