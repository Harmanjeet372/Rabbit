import React from 'react';
import mensColectionImage from "../../assets/mens-collection.webp";
import womensColectionImage from "../../assets/womens-collection.webp";
import { Link } from 'react-router-dom';

const GenderCollectionSection = () => {
  return (
    <section className="py-12 px-4">
      <div className="mx-auto flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl">
        {/* Women's Collection */}
        <div className="relative w-[450px]">
          <img
            src={womensColectionImage}
            alt="Women's collection"
            className="w-full h-[550px] object-cover rounded-lg"
          />
          <div className="absolute bottom-5 left-5 bg-white bg-opacity-90 p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Women's Collection</h2>
            <Link to="/collection/all?gender=women" className="text-base text-gray-900 underline">
              Shop Now
            </Link>
          </div>
        </div>

        {/* Men's Collection */}
        <div className="relative w-[450px]">
          <img
            src={mensColectionImage}
            alt="Men's collection"
            className="w-full h-[550px] object-cover rounded-lg"
          />
          <div className="absolute bottom-5 left-5 bg-white bg-opacity-90 p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Men's Collection</h2>
            <Link to="/collection/all?gender=men" className="text-base text-gray-900 underline">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenderCollectionSection;
