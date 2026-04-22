import React from "react";
import { assets } from "../../assets/assets";

function Footer() {
  return (
    <footer className="bg-[#07142B] text-white px-6 md:px-20 lg:px-32 pt-14">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-gray-700">
        
        {/* Left Section */}
        <div>
          <div className="flex items-center gap-2 mb-5">
            <img src={assets.logo} alt="logo" className="w-10" />
            <h1 className="text-2xl font-semibold">Edemy</h1>
          </div>

          <p className="text-gray-300 leading-7 max-w-sm">
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text.
          </p>
        </div>

        {/* Middle Section */}
        <div>
          <h2 className="text-lg font-semibold mb-5">Company</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="cursor-pointer hover:text-white">Home</li>
            <li className="cursor-pointer hover:text-white">About us</li>
            <li className="cursor-pointer hover:text-white">Contact us</li>
            <li className="cursor-pointer hover:text-white">Privacy policy</li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h2 className="text-lg font-semibold mb-5">
            Subscribe to our newsletter
          </h2>

          <p className="text-gray-300 mb-5 max-w-md">
            The latest news, articles, and resources, sent to your inbox
            weekly.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-[#13233F] border border-gray-600 px-4 py-3 rounded-md outline-none w-full text-white placeholder-gray-400"
            />

            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center py-6 text-gray-300 text-sm">
        Copyright 2024 © GreatStack. All Right Reserved.
      </div>
    </footer>
  );
}

export default Footer;