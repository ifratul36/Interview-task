"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, User, ShoppingBag, Ticket, HelpCircle, Settings, LogOut, Lock } from "lucide-react";

export default function ProfilePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-orange-50 flex flex-col lg:flex-row">
      {/* Hamburger Menu for Mobile */}
      <button
        className="lg:hidden p-4 text-orange-500 focus:outline-none"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "block" : "hidden"
        } lg:block w-full lg:w-64 bg-white shadow-md fixed lg:static top-0 left-0 h-full z-20 transition-transform duration-300 ease-in-out`}
      >
        <div className="p-6 flex flex-col items-center border-b border-gray-200">
          <div className="relative w-16 h-16 rounded-full overflow-hidden mb-4">
            <Image
              src="/images/profile.jpg"
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>
          <h2 className="text-lg font-semibold text-gray-900">Mark Jecno</h2>
          <p className="text-sm text-gray-500">mark-jecno@gmail.com</p>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            {[
              { name: "Profile", icon: User, href: "/profile" },
              { name: "Order", icon: ShoppingBag, href: "/order" },
              { name: "StampCard", icon: Ticket, href: "/stampcard" },
              { name: "Help", icon: HelpCircle, href: "/help" },
              { name: "Setting", icon: Settings, href: "/setting" },
              { name: "Log Out", icon: LogOut, href: "/logout" },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className={`flex items-center p-3 text-gray-600 hover:bg-orange-100 hover:text-orange-500 rounded-lg transition-colors ${
                    item.name === "Profile" ? "bg-orange-100 text-orange-500" : ""
                  }`}
                  onClick={() => setIsSidebarOpen(false)} // Close sidebar on link click
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black opacity-50 z-10"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8">
        {/* Profile Section */}
        <section className="bg-white p-4 sm:p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Profile</h2>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <label className="flex items-center text-gray-600 w-24">
                <User className="w-5 h-5 mr-2 text-orange-500" />
                Name:
              </label>
              <input
                type="text"
                value="Mark Jecno"
                className="flex-1 p-3 border border-dashed border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                readOnly
              />
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <label className="flex items-center text-gray-600 w-24">
                <svg
                  className="w-5 h-5 mr-2 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 12H8m4 4v-8m-6 4h12m-9-8V4a2 2 0 00-2-2H7a2 2 0 00-2 2v16a2 2 0 002 2h10a2 2 0 002-2V8a2 2 0 00-2-2h-4z"
                  />
                </svg>
                Email:
              </label>
              <input
                type="email"
                value="mark-jecno@gmail.com"
                className="flex-1 p-3 border border-dashed border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                readOnly
              />
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <label className="flex items-center text-gray-600 w-24">
                <Lock className="w-5 h-5 mr-2 text-orange-500" />
                Address:
              </label>
              <input
                type="text"
                value="93, Songbird Cir, Blackville, South Carolina, USA-29817"
                className="flex-1 p-3 border border-dashed border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
              />
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <button className="bg-orange-500 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors">
              Update
            </button>
          </div>
        </section>

        {/* Change Password Section */}
        <section className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Change Password</h2>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <label className="flex items-center text-gray-600 w-32 sm:w-40">
                <Lock className="w-5 h-5 mr-2 text-orange-500" />
                Current Password:
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="flex-1 p-3 border border-dashed border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
              />
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <label className="flex items-center text-gray-600 w-32 sm:w-40">
                <Lock className="w-5 h-5 mr-2 text-orange-500" />
                New Password:
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="flex-1 p-3 border border-dashed border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
              />
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <label className="flex items-center text-gray-600 w-32 sm:w-40">
                <Lock className="w-5 h-5 mr-2 text-orange-500" />
                Confirm Password:
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="flex-1 p-3 border border-dashed border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
              />
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <button className="bg-orange-500 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors">
              Save Changes
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}