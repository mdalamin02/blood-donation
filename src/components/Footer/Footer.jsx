import React from "react";
import "../../index.css";

function Footer() {
  return (
    <div className="bg-[#111827] text-white py-8">
      <div className="container mx-auto px-4">
        {/* Top Section: Call to Action */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-white pb-8">
          <div className="mb-6 md:mb-0">
            <img
              src="/blood.svg"
              alt="Get Blood Illustration"
              className="w-12 text-red-600"
            />
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p className="text-lg font-semibold text-center md:text-left">
              Ready to get started?
            </p>
            <button className="bg-white text-black px-8 py-2 font-bold rounded-lg hover:bg-gray-200 transition duration-300">
              Donate
            </button>
          </div>
        </div>

        {/* Middle Section: Links and Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
          {/* Newsletter Subscription */}
          <div className="md:col-span-2">
            <div className="text-lg font-semibold mb-4">
              Subscribe to our newsletter
            </div>
            <div className="flex justify-between items-center border-b border-white pb-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent text-white placeholder-gray-400 focus:outline-none flex-1"
              />
              <button className="bg-pink-200 p-2 rounded-lg hover:bg-pink-300 transition duration-300">
                <img src="/Path.svg" alt="Subscribe" className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-lg font-semibold text-[#FFD2DD] mb-4">
              Services
            </div>
            <ul className="space-y-2">
              <li>Email Marketing</li>
              <li>Campaign</li>
              <li>Branding</li>
              <li>Offline</li>
            </ul>
          </div>
          <div>
            <div className="text-lg font-semibold text-[#FFD2DD] mb-4">
              About
            </div>
            <ul className="space-y-2">
              <li>Our Story</li>
              <li>Benefits</li>
              <li>Team</li>
              <li>Career</li>
            </ul>
          </div>
          <div>
            <div className="text-lg font-semibold text-[#FFD2DD] mb-4">Help</div>
            <ul className="space-y-2">
              <li>FAQ</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Terms and Social Media */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-8 border-t border-white">
          <div className="flex gap-6 mb-6 md:mb-0">
            <a href="#" className="hover:text-pink-200">Terms & Conditions</a>
            <a href="#" className="hover:text-pink-200">Privacy Policy</a>
          </div>
          <div className="flex gap-6">
            <a href="#">
              <img
                src="/facebook.svg"
                alt="Facebook"
                className="w-6 h-6 hover:opacity-75"
              />
            </a>
            <a href="#">
              <img
                src="/twitter.svg"
                alt="Twitter"
                className="w-6 h-6 hover:opacity-75"
              />
            </a>
            <a href="#">
              <img
                src="/instagram.svg"
                alt="Instagram"
                className="w-6 h-6 hover:opacity-75"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;