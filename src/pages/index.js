
import React from "react";

export default function HomePage() {
  return (
    <div className="bg-cream text-[#2c2c2c] font-sans">
      <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
        <div className="flex items-center gap-3">
          <img src="/logo.jpg" alt="Bite Bao Logo" className="h-12 w-12" />
          <h1 className="text-2xl font-bold text-[#e63946]">BITE BAO</h1>
        </div>
        <div className="space-x-4 text-sm">
          <a href="#menu" className="hover:underline">Menu</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#order" className="hover:underline">Order</a>
        </div>
      </nav>

      <section className="relative text-center py-16 bg-gradient-to-b from-orange-50 to-white">
        <h2 className="text-4xl font-bold text-[#e63946] mb-2">Tradition Meets Flavor.</h2>
        <p className="text-xl font-medium mb-6">Balanced by Wellness.</p>
        <div className="space-x-4">
          <a href="#order" className="bg-[#e63946] text-white px-6 py-2 rounded-full shadow hover:bg-red-600 transition">Order Now</a>
          <a href="#menu" className="border border-[#e63946] text-[#e63946] px-6 py-2 rounded-full hover:bg-[#e63946] hover:text-white transition">See Menu</a>
        </div>
      </section>

      <section id="menu" className="py-12 px-6 text-center">
        <h3 className="text-2xl font-semibold mb-6">Our Favorites</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <img src="/soup-dumpling.jpg" className="rounded-xl shadow" alt="Soup Dumplings" />
            <h4 className="mt-2 font-semibold">Soup Dumplings</h4>
          </div>
          <div>
            <img src="/general-tso.jpg" className="rounded-xl shadow" alt="General Tso’s Chicken" />
            <h4 className="mt-2 font-semibold">General Tso’s Chicken</h4>
          </div>
          <div>
            <img src="/fitness-meal.jpg" className="rounded-xl shadow" alt="Fitness Meal" />
            <h4 className="mt-2 font-semibold">Fitness Meal</h4>
          </div>
        </div>
      </section>

      <section id="about" className="bg-[#f9f9f9] py-12 px-6 text-center">
        <h3 className="text-2xl font-semibold mb-4">About Bite Bao</h3>
        <p className="max-w-xl mx-auto text-lg">
          At Bite Bao, we’re on a mission to elevate traditional American Chinese cuisine. From handcrafted soup dumplings to health-conscious fitness meals, we bring authentic flavor with a modern twist.
        </p>
      </section>

      <section id="order" className="py-12 px-6 bg-yellow-50 text-center">
        <h3 className="text-xl font-bold mb-2">⭐⭐⭐⭐⭐</h3>
        <p className="text-lg mb-4">
          Love our food? Leave us a review on Yelp or your favorite delivery app and get a <strong>FREE appetizer</strong> on your next order!
        </p>
        <div className="space-x-4">
          <a href="https://yelp.com" target="_blank" className="underline text-[#e63946]">Yelp</a>
          <a href="https://ubereats.com" target="_blank" className="underline text-[#e63946]">UberEats</a>
          <a href="https://doordash.com" target="_blank" className="underline text-[#e63946]">DoorDash</a>
        </div>
        <p className="text-sm mt-2 text-gray-600">*Show proof at pickup or mention in your order notes.</p>
      </section>

      <footer className="bg-white border-t text-sm text-center text-gray-600 py-4">
        <p>© 2025 Bite Bao. All rights reserved.</p>
        <p>123 Main Street, Huntington Station, NY | (123) 456-7890</p>
      </footer>
    </div>
  );
}
