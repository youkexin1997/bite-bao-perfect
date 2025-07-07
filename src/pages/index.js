import React from "react";

export default function HomePage() {
  return (
    <div className="bg-white text-[#2c2c2c] font-sans">
      <nav className="flex items-center justify-between px-6 py-3 bg-white shadow">
        <div className="flex items-center gap-2">
          <img src="/logo.jpg" alt="Logo" className="h-8 w-8 rounded-full" />
          <span className="text-xl font-bold text-[#e63946]">BITE BAO</span>
        </div>
        <div className="space-x-4">
          <a href="#menu" className="text-gray-700 hover:text-[#e63946]">Menu</a>
          <a href="#order" className="bg-[#e63946] text-white px-4 py-2 rounded">Order Now</a>
        </div>
      </nav>

      <section className="relative w-full h-[80vh] bg-cover bg-center" style={{ backgroundImage: 'url(/soup-dumpling.jpg)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h2 className="text-4xl font-bold mb-2">Tradition Meets Flavor.</h2>
          <p className="text-lg mb-4">Balanced by Wellness.</p>
          <a href="#menu" className="bg-white text-[#e63946] px-6 py-3 rounded shadow">See Menu</a>
        </div>
      </section>

      <section id="menu" className="py-16 px-6">
        <h3 className="text-3xl font-semibold text-center mb-10">Our Favorites</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src="/soup-dumpling.jpg" alt="Soup Dumplings" className="rounded-xl shadow mb-4" />
            <h4 className="text-lg font-semibold text-center">Soup Dumplings</h4>
          </div>
          <div>
            <img src="/general-tso.jpg" alt="General Tso" className="rounded-xl shadow mb-4" />
            <h4 className="text-lg font-semibold text-center">General Tso's Chicken</h4>
          </div>
          <div>
            <img src="/fitness-meal.jpg" alt="Fitness Meal" className="rounded-xl shadow mb-4" />
            <h4 className="text-lg font-semibold text-center">Fitness Meal</h4>
          </div>
        </div>
      </section>

      <section id="about" className="flex flex-col md:flex-row items-center py-16 px-6">
        <img src="/fitness-meal.jpg" className="w-full md:w-1/2 rounded shadow mb-6 md:mb-0" alt="Fitness Meals" />
        <div className="md:ml-10 space-y-4">
          <h3 className="text-2xl font-semibold">About Bite Bao</h3>
          <p className="text-lg leading-relaxed">
            At Bite Bao, we elevate traditional American Chinese cuisine. From handcrafted soup dumplings to health-conscious meals, we bring authentic flavor with a modern twist.
          </p>
          <a href="#order" className="inline-block bg-[#e63946] text-white px-4 py-2 rounded">Order Now</a>
        </div>
      </section>

      <section className="bg-gray-50 py-12 px-6 text-center space-y-4">
        <p className="text-lg">📍 1080 New York Ave, Huntington Station, NY 11746</p>
        <p className="text-lg">🕒 Mon–Sun: 11 AM – 9 PM</p>
        <p className="text-lg">📞 347-556-8273</p>
      </section>

      <footer className="py-8 px-6 text-center">
        <p className="mb-4">Love us? Leave a review and get a FREE appetizer!</p>
        <div className="space-x-4">
          <a href="https://yelp.com" className="underline text-[#e63946]">Yelp</a>
          <a href="https://ubereats.com" className="underline text-[#e63946]">UberEats</a>
          <a href="https://doordash.com" className="underline text-[#e63946]">DoorDash</a>
        </div>
        <p className="mt-6 text-sm text-gray-500">© 2025 Bite Bao. All rights reserved.</p>
      </footer>
    </div>
  );
}
