'use client';

import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-peach-100 flex items-center justify-center relative overflow-hidden">
      {/* Background Image or Overlay (simulated with color) */}
      {/* Main Content */}
      <div className="text-center px-4">
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-orange-600 mb-4">
          Hungry?
        </h1>
        <h2 className="text-4xl md:text-5xl font-bold text-orange-600 mb-6">
          Let Us Bring The Feast to You
        </h2>
        {/* Subtext */}
        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-md mx-auto">
          Explore hundreds of delicious options from top restaurants and enjoy fast, reliable delivery right to you.
        </p>
        {/* Location Input and Button */}
        <div className="flex justify-center items-center space-x-4 mb-8">
          <div className="flex items-center bg-white rounded-lg p-2 shadow-md">
            <input
              type="text"
              placeholder="Enter your location"
              className="outline-none bg-transparent text-gray-700 w-48 md:w-64"
            />
            <button className="text-orange-600 ml-2">🔍 Locate me</button>
          </div>
          <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition">
            Find Food
          </button>
        </div>
        {/* Customer Satisfaction Badge */}
        <div className="absolute top-10 right-10 bg-white rounded-lg shadow-lg p-4 flex items-center space-x-2">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            <span className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white">
              +
            </span>
          </div>
          <div>
            <p className="text-sm text-gray-600">Satisfied Customer</p>
            <div className="flex items-center">
              <span className="text-yellow-400">★</span>
              <span className="ml-1 text-gray-800">5.0 (3K Reviews)</span>
            </div>
          </div>
        </div>
        {/* Restaurant Card */}
        <div className="absolute bottom-10 left-10 bg-white rounded-lg shadow-lg p-4 flex items-center space-x-4">
          <Image
            src="https://via.placeholder.com/80" // Replace with actual restaurant image
            alt="Restaurant"
            width={80}
            height={80}
            className="rounded-lg"
          />
          <div>
            <p className="font-semibold">Flavor Fusion Bistro</p>
            <div className="flex items-center">
              <span className="text-yellow-400">★</span>
              <span className="ml-1 text-gray-600">4.9</span>
            </div>
          </div>
          <div className="ml-auto flex items-center space-x-1">
            <span>🚚</span>
            <span className="text-gray-600">24/7 Delivery</span>
          </div>
        </div>
        {/* Hero Image (simulated with text for now) */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative w-64 h-64">
            <div className="absolute -top-10 left-20 w-32 h-32 bg-yellow-300 rounded-full"></div>
            <div className="absolute top-10 left-10 w-40 h-40 bg-gray-200 rounded-full flex items-center justify-center text-2xl font-bold text-gray-700">
              🍔
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}