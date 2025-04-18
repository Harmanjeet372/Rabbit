import React from 'react';
import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterLine } from "react-icons/ri";

const Topbar = () => {
  return (
    <div className="bg-[#ea2e0e] text-white text-sm py-2">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-2 md:gap-0">
        
        {/* Social Icons */}
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-gray-300">
            <TbBrandMeta className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <IoLogoInstagram className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <RiTwitterLine className="h-5 w-5" />
          </a>
        </div>

        {/* Message */}
        <div className="text-center">
          We ship worldwide – Fast and reliable shipping
        </div>

        {/* Phone */}
        <div>
          <a href="tel:+1234567890" className="hover:text-gray-300">
            +1 (234) 567-890
          </a>
        </div>
        
      </div>
    </div>
  );
}

export default Topbar;
