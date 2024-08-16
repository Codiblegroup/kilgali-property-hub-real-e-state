import React from 'react';
import { FaBed, FaBath } from 'react-icons/fa';
import { GiResize } from 'react-icons/gi';
import { BsArrowRight } from 'react-icons/bs';
import card from '../assets/card.png';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';

const BestProperties = () => {
  return (
    <div className="bg-green-500 min-h-screen flex justify-center items-center p-4">
      <div className="max-w-6xl mx-auto w-full px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Best Properties</h1>
          <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Large Property Card */}
          <div className="relative bg-white rounded-lg overflow-hidden shadow-lg">
            <img
              src={card}
              alt="Villa One Hyde Park"
              className="w-full h-80 object-cover"
            />
            <div className="absolute top-2 left-2 flex space-x-2">
              <span className="bg-black text-white text-xs font-semibold px-2 py-1 rounded">FOR SALE</span>
              <span className="bg-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded">FEATURED</span>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold">Villa One Hyde Park</h3>
              <p className="text-sm text-gray-500">2050 Bloomingdale Ave</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-xl font-bold">$120,000</span>
                <div className="flex space-x-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <FaBed className="mr-1" /> 4
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <FaBath className="mr-1" /> 2
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <GiResize className="mr-1" /> 350
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="grid grid-cols-1 gap-6">
            {/* Image 1 */}
            <div className="relative">
              <img
                src={image1}
                alt="Interior"
                className="w-full h-48 object-cover rounded-lg"
              />
              <button className="absolute inset-0 flex justify-center items-center text-white bg-black bg-opacity-50 hover:bg-opacity-75 transition-opacity duration-300 rounded-lg">
                <BsArrowRight size={32} />
              </button>
            </div>
            {/* Image 2 and Info Box */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Image 2 */}
              <div className="relative">
                <img
                  src={image2}
                  alt="Interior"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <button className="absolute inset-0 flex justify-center items-center text-white bg-black bg-opacity-50 hover:bg-opacity-75 transition-opacity duration-300 rounded-lg">
                  <BsArrowRight size={32} />
                </button>
              </div>
              {/* Info Box */}
              <div className="bg-yellow-400 p-4 rounded-lg flex flex-col justify-between text-center">
                <div className="mb-4">
                  <h3 className="text-3xl font-bold">280+</h3>
                  <p className="text-sm">Properties</p>
                </div>
                <p className="text-sm mb-4">
                  Explore our wide variety of properties to find your dream home today.
                </p>
                <div className="mt-4 flex justify-center">
                  <button className="bg-white p-2 rounded-full shadow-md">
                    <BsArrowRight className="text-black" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestProperties;
