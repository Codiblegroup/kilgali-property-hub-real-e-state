import React from 'react';
import profile from '../assets/profile.png';

const Testimonials = () => {
  return (
    <div className="bg-[#faf7f4] py-16 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 mt-28">
        {/* Customer Feedback Section */}
        <div className="flex flex-col lg:flex-row items-start justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-3xl font-bold mb-4">What our customers are saying us?</h2>
            <p className="text-gray-600 mb-6">
              Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like.
            </p>
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold">10m+</h3>
                <p className="text-gray-600">Happy People</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold">4.88</h3>
                <p className="text-gray-600">Overall rating</p>
                <div className="flex justify-center mt-2">
                  <span className="text-yellow-500 text-lg">★ ★ ★ ★ ★</span>
                </div>
              </div>
            </div>
          </div>

          {/* Customer Testimonial */}
          <div className="lg:w-1/2 text-center lg:ml-20">
            <div className="flex items-center mb-4 ">
              <img
                className="w-12 h-12 rounded-full"
                src={profile}
                alt="Teta Kevine"
              />
              <div className="ml-4 text-left">
                <h3 className="text-lg font-bold">Teta Kevine</h3>
                <p className="text-gray-600">Designer</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              Searches for multiplexes, property comparisons, and the loan estimator. Works great. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolores.
            </p>
            <div className="flex space-x-4 ">
              <button className="bg-gray-300 rounded-full p-2 hover:bg-gray-400 focus:outline-none">
                {'<'}
              </button>
              <button className="bg-gray-300 rounded-full p-2 hover:bg-gray-400 focus:outline-none">
                {'>'}
              </button>
            </div>
          </div>
        </div>

        {/* Real Estate Agent Section */}
        <div className="p-6 mt-16 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h3 className="text-xl font-bold mb-2">Become a Real Estate Agent</h3>
              <p className="text-gray-600 mb-4">
                We only work with the best companies around the globe
              </p>
            </div>
            <button className="bg-yellow-500 text-white px-6 py-3 rounded-full hover:bg-yellow-600 focus:outline-none">
              Register Now →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
