import React from "react";
import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterLine } from "react-icons/ri";
import { FiPhone } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 mt-12">
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm text-gray-800">

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-2">Newsletter</h3>
          <p className="mb-2">Be the first to hear about new products, exclusive events, and online offers</p>
          <p className="mb-4 font-semibold">Sign up and get 10% off your first order</p>
          <div className="flex">
            <input
              type="email"
              placeholder="enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
            />
            <button className="bg-black text-white px-4 py-2 rounded-r-md">
              Subscribe
            </button>
          </div>
        </div>

        {/* Shop */}
        <div>
          <h3 className="font-semibold mb-2">Shop</h3>
          <ul className="space-y-1">
            <li>Men's Top wear</li>
            <li>Women's Top wear</li>
            <li>Men's Bottom wear</li>
            <li>Women's Bottom wear</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-2">Support</h3>
          <ul className="space-y-1">
            <li>Contact Us</li>
            <li>About Us</li>
            <li>FAQs</li>
            <li>Features</li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4 mb-4">
            <TbBrandMeta className="h-5 w-5" />
            <IoLogoInstagram className="h-5 w-5" />
            <RiTwitterLine className="h-5 w-5" />
          </div>
          <div>
            <p className="font-medium mb-1">Call Us</p>
            <div className="flex items-center space-x-2 text-gray-700">
              <FiPhone />
              <span>0123-456-789</span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 py-4 border-t border-gray-100">
        2025, Completetab. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
