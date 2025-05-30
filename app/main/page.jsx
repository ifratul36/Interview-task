"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
  Truck,
  Heart,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-orange-50">
      {/** Header */}
      <header>
        {/* top-navbar */}
        <nav className="bg-[#ED6923] h-[40px] flex justify-center items-center">
          <h2 className="text-sm text-white font-medium sm:text-base">
            Free Delivery on Your First Order – Order Now!
          </h2>
        </nav>
        <nav className="max-w-7xl mx-auto p-4 flex justify-between items-center">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={80}
              height={32}
              className="sm:w-[100px] sm:h-[40px] object-cover"
            />
          </Link>
          <Link href="/profile">
            <Image
              src="/images/profile.jpg"
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full hover:opacity-80 border border-[#ED6923] object-cover"
              style={{ aspectRatio: "1/1" }} // Ensures 1:1 aspect ratio
            />
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 to-orange-100 py-8 sm:py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Hungry?
                <br />
                <span className="text-orange-500">Let Us Bring</span>
                <br />
                The Feast to You
              </h1>
              <p className="text-base sm:text-lg text-gray-600 max-w-md">
                Discover delicious meals from your favorite restaurants,
                delivered fresh to your doorstep in minutes.
              </p>

              <div className="max-w-4xl mx-auto bg-white rounded-lg overflow-hidden shadow-md flex flex-col sm:flex-row items-center justify-between">
                {/* Input and Locate me Section */}
                <div className="flex-1 flex items-center w-full sm:w-auto">
                  <input
                    type="text"
                    placeholder="Enter your location"
                    className="flex-1 p-3 text-gray-400 border-0 focus:outline-none focus:ring-0 w-full sm:w-auto"
                  />
                  <button className="flex items-center px-4 py-2 bg-white border border-dashed border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Find Food
                  </button>
                  <button className="ml-2 p-2 bg-white border border-dashed border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                    <span className="sr-only">Locate me</span>
                  </button>
                </div>

                {/* Find Food Button */}
                <button className="w-full sm:w-auto mt-2 sm:mt-0 px-6 py-3 bg-[#ED6923] text-white font-semibold rounded-r-lg hover:bg-orange-600 transition-colors">
                  Find Food
                </button>
              </div>
            </div>
            {/* <div className="relative">
              <div className="relative w-full h-64 sm:h-80 lg:h-[500px]">
                <Image
                  src="/images/hero.png"
                  alt="Happy customer with food"
                  fill
                  className="object-contain"
                />
              </div>
            </div> */}
            <div className="relative py-8 sm:py-12 lg:py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative">
                  {/* Background Image */}
                  <div className="relative w-full h-56 sm:h-72 lg:h-96 rounded-lg overflow-hidden">
                    <Image
                      src="/images/hero.png"
                      alt="Customer holding a burger"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Satisfied Customer Badge (Top Left) */}
                  <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-white p-2 sm:p-3 rounded-lg shadow-md flex flex-col items-center gap-1 sm:gap-2">
                    {/* Overlapping Avatars */}
                    <div className="flex -space-x-2 sm:-space-x-3">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white overflow-hidden"
                        >
                          <Image
                            src={`/images/hero-${i + 1}.jpg`}
                            alt={`Customer ${i + 1}`}
                            fill
                            className="object-cover rounded-full"
                          />
                        </div>
                      ))}
                    </div>
                    {/* Text and Rating */}
                    <div className="flex flex-col items-center">
                      <p className="text-[10px] sm:text-xs lg:text-sm text-gray-600">
                        Satisfied Customer
                      </p>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-yellow-400 fill-yellow-400" />
                        <span className="text-[10px] sm:text-xs lg:text-sm font-semibold text-gray-700">
                          5.0 (3K Reviews)
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Flavor Fusion Bistro Card (Bottom Left) */}
                  <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 bg-[#ffffff5b] p-2 sm:p-3 rounded-lg shadow-md flex items-center gap-2 w-40 sm:w-48 lg:w-56">
                    <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded overflow-hidden">
                      <Image
                        src="/images/hero-image.jpg"
                        alt="Flavor Fusion Bistro"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[10px] sm:text-xs lg:text-sm font-semibold text-gray-900">
                        Flavor Fusion Bistro
                      </h3>
                      <div className="flex items-center gap-1">
                        <Star className="w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-[10px] sm:text-xs lg:text-sm text-gray-600">
                          4.9 ★
                        </span>
                      </div>
                    </div>
                    <button className="p-1 rounded-full hover:bg-gray-100">
                      <Heart className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-gray-400 hover:text-red-500" />
                    </button>
                  </div>

                  {/* 24/7 Delivery Badge (Bottom Right) */}
                  <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 bg-[#ffffff5b] p-2 sm:p-3 rounded-lg shadow-md flex items-center gap-1 sm:gap-2">
                    <Truck className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-orange-500" />
                    <span className="text-[10px] sm:text-xs lg:text-sm font-semibold text-gray-900">
                      24/7 Delivery
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Category Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 sm:mb-8">
            <p className="text-xs sm:text-sm text-gray-600 mb-1">Category</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-600">
              Popular <span className="text-orange-500">Category</span>
            </h2>
          </div>

          <div className="relative">
            {/* Navigation Arrows */}
            <button className="btn btn-circle btn-outline bg-white shadow-md absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden sm:flex">
              <ChevronLeft />
            </button>
            <button className="btn btn-circle btn-outline bg-white shadow-md absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden sm:flex">
              <ChevronRight />
            </button>

            {/* Category Cards */}
            <div className="flex overflow-x-auto gap-4 px-4 sm:px-8 pb-4 snap-x snap-mandatory">
              {[
                {
                  name: "Donuts",
                  image: "/images/popular-category/donuts.png",
                  bg: "bg-amber-200",
                },
                {
                  name: "Pizza",
                  image: "/images/popular-category/pizza.png",
                  bg: "bg-orange-400",
                },
                {
                  name: "Kebab",
                  image: "/images/popular-category/kabab.png",
                  bg: "bg-orange-500",
                },
                {
                  name: "Burger",
                  image: "/images/popular-category/burger.png",
                  bg: "bg-orange-500",
                },
                {
                  name: "Sandwich",
                  image: "/images/popular-category/sandwich.png",
                  bg: "bg-orange-600",
                },
                {
                  name: "Shawarma",
                  image: "/images/popular-category/shawarma.png",
                  bg: "bg-yellow-400",
                },
                {
                  name: "Taco",
                  image: "/images/popular-category/taco.png",
                  bg: "bg-red-600",
                },
              ].map((category, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 w-32 h-32 sm:w-36 sm:h-36 rounded-lg ${category.bg} relative overflow-hidden snap-center`}
                >
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-3 left-0 right-0 text-center text-white font-medium text-sm sm:text-base">
                    {category.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Popular Food Near Me */}
      <section className="py-8 sm:py-12 lg:py-16 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-8">
            <div>
              <p className="text-xs sm:text-sm text-[#000000ac] mb-1">
                Popular Food
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold">
                <span className="text-gray-600 mr-2">Popular</span>
                <span className="text-orange-500">Food Near me</span>
              </h2>
            </div>
            <button className="btn btn-outline border-orange-500 text-orange-500 hover:bg-orange-50 mt-4 sm:mt-0">
              View All
            </button>
          </div>

          <div className="relative">
            {/* Navigation Arrows */}
            <button className="absolute p-3 border btn btn-circle btn-outline left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-xl hidden sm:flex">
              <ChevronLeft className="h-4 w-4 text-gray-600" />
            </button>
            <button className="absolute p-3 border btn btn-circle btn-outline right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-xl hidden sm:flex">
              <ChevronRight className="h-4 w-4 text-gray-600" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-8">
              {[
                {
                  name: "Burger with Emmental Cheese",
                  price: "€44.99",
                  rating: 4.6,
                  reviews: 169,
                  restaurant: "Burger King",
                  time: "30 min",
                  discount: "15% OFF",
                  image: "/images/popular-food/burger-emmental-cheese.jpg",
                },
                {
                  name: "Tandoori Chicken",
                  price: "€43.99",
                  rating: 4.8,
                  reviews: 169,
                  restaurant: "Burger King",
                  time: "30 min",
                  discount: "25% OFF",
                  image: "/images/popular-food/tandori-chicken.jpg",
                },
                {
                  name: "Döner Kebab",
                  price: "€44.99",
                  rating: 4.6,
                  reviews: 169,
                  restaurant: "Burger King",
                  time: "30 min",
                  discount: "30% OFF",
                  image: "/images/popular-food/doner-kabab.jpg",
                },
                {
                  name: "Pepperoni Pizza Slice",
                  price: "€44.99",
                  rating: 4.6,
                  reviews: 169,
                  restaurant: "Burger King",
                  time: "30 min",
                  discount: "15% OFF",
                  image: "/images/popular-food/pepperoni-pizza.jpg",
                },
              ].map((food, index) => (
                <div
                  key={index}
                  className="overflow-hidden hover:shadow-lg transition-shadow bg-white"
                >
                  <div className="relative h-40 sm:h-48">
                    <Image
                      src={food.image || "/placeholder.svg"}
                      alt={food.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded">
                      {food.discount}
                    </div>
                    <button className="absolute top-3 right-3 bg-white/60 hover:bg-white h-8 w-8 rounded-full border flex justify-center items-center">
                      <svg
                        className="h-5 w-5 text-[#00000073]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-[#000000ac] mb-2 text-sm leading-tight">
                      {food.name}
                    </h3>
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-medium text-gray-500">
                        {food.rating}
                      </span>
                      <span className="text-xs text-gray-500">
                        ({food.reviews})
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-gray-300 rounded-full border border-gray-500"></div>
                        <span>{food.restaurant}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <svg
                          className="h-3 w-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12,6 12,12 16,14"></polyline>
                        </svg>
                        <span>{food.time}</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-base sm:text-lg font-bold text-gray-900">
                        {food.price}
                      </span>
                      <button className="bg-orange-500 hover:bg-orange-600 h-8 w-8 rounded-full flex justify-center items-center">
                        <svg
                          className="h-4 w-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <line x1="12" y1="5" x2="12" y2="19"></line>
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Popular Restaurant Near You */}
      <section className="py-8 sm:py-12 lg:py-16 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-8">
            <div>
              <p className="text-xs sm:text-sm text-gray-600 mb-1">
                Popular Food
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold">
                <span className="text-gray-600 mr-2">
                  Popular{" "}
                  <span className="text-orange-500">Restaurent Near me</span>
                </span>
              </h2>
            </div>
            <button className="btn btn-outline border-orange-500 text-orange-500 hover:bg-orange-50 mt-4 sm:mt-0">
              View All
            </button>
          </div>

          <div className="relative">
            <button className="absolute p-3 border btn btn-circle btn-outline left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-xl hidden sm:flex">
              <ChevronLeft className="h-4 w-4 text-gray-600" />
            </button>
            <button className="absolute p-3 border btn btn-circle btn-outline right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-xl hidden sm:flex">
              <ChevronRight className="h-4 w-4 text-gray-600" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-8">
              {[
                {
                  name: "Burger King",
                  rating: 4.6,
                  reviews: 85,
                  time: "20-30 min",
                  deliveryFee: "€10",
                  discount: "10% Off",
                  categories: "Pizza | Burger | Pasta | Chicken Fry",
                  image: "/images/popular-restaurant/burger-king.jpg",
                },
                {
                  name: "Vienna's Delight",
                  rating: 4.6,
                  reviews: 85,
                  time: "20-30 min",
                  deliveryFee: "€10",
                  discount: "10% Off",
                  categories: "Pizza | Burger | Pasta | Chicken Fry",
                  image: "/images/popular-restaurant/vienna-delight.jpg",
                },
                {
                  name: "AlpenFlair Bistro",
                  rating: 4.6,
                  reviews: 85,
                  time: "20-30 min",
                  deliveryFee: "€10",
                  discount: "10% Off",
                  categories: "Pizza | Burger | Pasta | Chicken Fry",
                  image: "/images/popular-restaurant/bistro.jpg",
                },
                {
                  name: "Mozart's Table",
                  rating: 4.6,
                  reviews: 85,
                  time: "20-30 min",
                  deliveryFee: "€10",
                  discount: "10% Off",
                  categories: "Pizza | Burger | Pasta | Chicken Fry",
                  image: "/images/popular-restaurant/mozarts.jpg",
                },
              ].map((restaurant, index) => (
                <div
                  key={index}
                  className="card bg-white shadow-lg hover:shadow-xl transition-shadow"
                >
                  <figure className="relative h-40 sm:h-48">
                    <Image
                      src={restaurant.image || "/placeholder.svg"}
                      alt={restaurant.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded">
                      {restaurant.discount}
                    </div>
                  </figure>
                  <div className="card-body p-4">
                    <h3 className="card-title text-base sm:text-lg font-bold mb-2 text-gray-500">
                      {restaurant.name}
                    </h3>
                    <div className="absolute top-36 sm:top-44 right-1 border p-1 rounded-3xl bg-[#fff] flex items-center gap-1 mb-2">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-[12px] font-medium text-gray-500">
                        {restaurant.rating}
                      </span>
                      <span className="text-[12px] text-gray-500">
                        ({restaurant.reviews})
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-xs sm:text-sm text-gray-600 mb-3">
                      <div className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12,6 12,12 16,14"></polyline>
                        </svg>
                        <span>{restaurant.time}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                          />
                        </svg>
                        <span className="text-orange-500 font-medium">
                          Delivery Fee {restaurant.deliveryFee}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-500">
                      {restaurant.categories}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="py-12 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-sm text-gray-600">Restaurants</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Enhance your experience,
                <br />
                <span className="text-orange-500">
                  Download the Tweet app today!
                </span>
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                Discover a whole new level of convenience with our mobile app.
                From browsing our delectable menu to securing exclusive deals,
                it’s your gateway to a world of culinary delights. Download now
                and elevate your dining experience with just a tap.
              </p>

              {/* Store Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#"
                  className="flex items-center bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-800 transition"
                >
                  <svg
                    className="w-6 h-6 mr-3 text-white"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                  >
                    <path d="M325.3 234.3L104.3 32.3C98.3 26.3 90.3 24 83.3 26.3C76.3 28.6 70.3 35.6 70.3 42.6V469.6C70.3 476.6 76.3 483.6 83.3 485.9C90.3 488.2 98.3 485.9 104.3 479.9L325.3 277.9C336.3 267.9 336.3 244.3 325.3 234.3ZM384.3 277.9L453.3 342.6C464.3 353.6 464.3 368.6 453.3 379.6L325.3 485.9C316.3 493.9 303.3 496.9 290.3 494.6C277.3 492.3 267.3 483.6 264.3 470.6L233.3 362.6L384.3 277.9ZM384.3 234.3L233.3 149.6L264.3 41.6C267.3 28.6 277.3 19.9 290.3 17.6C303.3 15.3 316.3 18.3 325.3 26.3L453.3 132.6C464.3 143.6 464.3 158.6 453.3 169.6L384.3 234.3Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">ANDROID APP ON</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex items-center bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-800 transition"
                >
                  <svg
                    className="w-6 h-6 mr-3"
                    viewBox="0 0 384 512"
                    fill="currentColor"
                  >
                    <path d="M318.7 268.5C318.7 349.1 385.7 377.3 385.7 377.3C364.4 417.3 334.4 459.1 286.4 461.5C254.4 463.2 241.7 442.5 206.7 442.5C171.7 442.5 158.7 463.2 126.7 461.5C78.7 459.1 48.7 417.3 27.4 377.3C27.4 377.3 94.4 349.1 94.4 268.5C94.4 208.5 144.4 174.5 179.4 174.5C206.7 174.5 218.7 188.5 237.4 188.5C256.1 188.5 268.7 174.5 296 174.5C330.9 174.5 381 208.5 381 268.5H318.7ZM242.7 0C214.7 0 178.7 25.3 178.7 63.2C178.7 99.2 208.7 125.2 236.7 125.2C262.7 125.2 299.7 101.2 299.7 63.2C299.7 25.3 270.7 0 242.7 0Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">Available on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Mobile Image */}
            <div className="relative w-full h-72 sm:h-96 lg:h-[500px]">
              <Image
                src="/images/moblie.png"
                alt="Mobile app"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Statistics Section */}
          <div className="mt-12 bg-[#ED6923] rounded-tl-3xl rounded-br-3xl px-6 py-8 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <svg
                className="w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid slice"
              >
                <path
                  d="M10 10 L90 10 L90 90 L10 90 Z"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                />
                <circle cx="20" cy="20" r="5" fill="white" />
                <circle cx="80" cy="20" r="5" fill="white" />
                <circle cx="20" cy="80" r="5" fill="white" />
                <circle cx="80" cy="80" r="5" fill="white" />
              </svg>
            </div>
            <div className="relative grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-2">
                <div className="text-4xl font-bold mb-1">100+</div>
                <div className="text-orange-100 text-sm">Food Menu</div>
              </div>
              <div className="p-2">
                <div className="text-4xl font-bold mb-1">100+</div>
                <div className="text-orange-100 text-sm">Downloads</div>
              </div>
              <div className="p-2">
                <div className="text-4xl font-bold mb-1">20+</div>
                <div className="text-orange-100 text-sm">Positive reviews</div>
              </div>
              <div className="p-2">
                <div className="text-4xl font-bold mb-1">4.7</div>
                <div className="text-orange-100 text-sm">Average Review</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonial */}
      <section className="py-8 sm:py-12 lg:py-16 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center">
            <div className="space-y-4 sm:space-y-6">
              <p className="text-xs sm:text-sm text-gray-600 mb-2">
                Testimonial
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                What <span className="text-orange-500">Customer Saying</span>
                <br />
                About our Services
              </h2>
              <div className="border border-orange-500 rounded-lg p-4 sm:p-6 shadow-sm relative">
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                  <Quote className="text-orange-500 size-5 -rotate-180 inline-block mr-1" />
                  Love the convenience of Tweet! Fast, reliable, and super easy
                  to use for all your food delivery cravings.
                  <Quote className="text-orange-500 size-5 inline-block ml-1" />
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden">
                        <Image
                          src="/images/testimonial.jpg"
                          alt="Leon Fischer"
                          width={48}
                          height={48}
                          className="object-cover"
                          style={{ aspectRatio: "1/1" }}
                        />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
                        Leon Fischer
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-500">
                        Satisfied Customer
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 bg-orange-500 px-2 sm:px-3 py-1 rounded">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-3 sm:w-4 h-3 sm:h-4 text-white fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex justify-center gap-2 mt-4 sm:mt-6">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                      i === 2 ? "bg-orange-500" : "bg-gray-300"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
            {/* Food Image Section */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                {/* Main Food Image */}
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border border-dashed border-orange-700 z-10">
                  <Image
                    src="/images/testimonial-main.png"
                    alt="Delicious food bowl"
                    width={384}
                    height={384}
                    className="object-cover rounded-full"
                    style={{ aspectRatio: "1/1" }}
                  />
                </div>

                {/* Cherry Tomatoes & Chili - Slightly Behind Top Left */}
                <div className="absolute top-2 left-0 w-24 sm:w-32 lg:w-36 h-24 sm:h-32 lg:h-36 z-0">
                  <Image
                    src="/images/tomato-chlli.png"
                    alt="Cherry tomatoes and chili"
                    width={144}
                    height={144}
                    className="object-contain"
                  />
                </div>

                {/* Green Peas - Top Right */}
                <div className="absolute -top-4 -right-4 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 z-0">
                  <Image
                    src="/images/green.png"
                    alt="Green peas"
                    width={96}
                    height={96}
                    className="object-contain"
                  />
                </div>

                {/* Tomato Slices - Bottom Left */}
                <div className="absolute -bottom-4 -left-4 w-24 sm:w-28 lg:w-32 h-12 sm:h-14 lg:h-16 z-0">
                  <Image
                    src="/images/tomato-bottom.png"
                    alt="Tomato slices"
                    width={128}
                    height={64}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center">
                <Image
                  src="/images/logo.png"
                  alt="Tweet Logo"
                  width={100}
                  height={40}
                  className="object-contain sm:w-[120px] sm:h-[50px]"
                />
              </div>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Your go-to choice for fast and fresh delivery, bringing the best
                to your door in no time
              </p>
              <div className="flex space-x-4">
                {["twitter", "facebook", "linkedin", "whatsapp"].map(
                  (social, index) => (
                    <a
                      key={index}
                      href="#"
                      className={`w-8 sm:w-10 h-8 sm:h-10 rounded-full flex items-center justify-center hover:bg-gray-700 ${
                        social === "linkedin"
                          ? "bg-orange-500 hover:bg-orange-600"
                          : "bg-gray-800"
                      }`}
                    >
                      <svg
                        className="w-4 sm:w-5 h-4 sm:h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {social === "twitter" && (
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        )}
                        {social === "facebook" && (
                          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                        )}
                        {social === "linkedin" && (
                          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                        )}
                        {social === "whatsapp" && (
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        )}
                      </svg>
                    </a>
                  )
                )}
              </div>
            </div>
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-base sm:text-lg font-medium">Quick Link</h3>
              <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    How We works
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Career
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-base sm:text-lg font-medium">Quick Link</h3>
              <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Privacy Policies
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Faq
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-base sm:text-lg font-medium">Newsletter</h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                Subscribe Our newsletter to get our latest Update & News
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-md w-full focus:outline-none text-xs sm:text-sm"
                />
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-r-md">
                  <svg
                    className="w-4 sm:w-5 h-4 sm:h-5 -rotate-45"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
            <p className="text-gray-400 text-xs sm:text-sm text-center">
              © 2024 Tweet. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
