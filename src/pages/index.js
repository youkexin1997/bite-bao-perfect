
import Head from "next/head";

export default function Home() {
  return (
    <div className="text-gray-800 font-sans">
      <Head>
        <title>Bite Bao</title>
      </Head>

      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.jpg" alt="Logo" className="h-10 w-10 rounded-full" />
            <h1 className="text-2xl font-bold text-[#e63946]">Bite Bao</h1>
          </div>
          <nav className="space-x-6 hidden md:block">
            <a href="#menu" className="hover:text-[#e63946]">Menu</a>
            <a href="#about" className="hover:text-[#e63946]">About</a>
            <a href="#order" className="hover:text-[#e63946]">Order</a>
          </nav>
        </div>
      </header>

      <section className="relative bg-cover bg-center h-[80vh] flex items-center justify-center text-white text-center" style={{ backgroundImage: "url('/soup-dumpling.jpg')" }}>
        <div className="bg-black bg-opacity-50 absolute inset-0"></div>
        <div className="relative z-10">
          <h2 className="text-5xl font-bold mb-4">Classic Chinese Flavor, Healthy Modern Twist</h2>
          <div className="space-x-4">
            <a href="#menu" className="bg-[#e63946] text-white px-6 py-3 rounded font-semibold hover:bg-[#d62828]">See Menu</a>
            <a href="#order" className="bg-white text-[#e63946] px-6 py-3 rounded font-semibold hover:bg-gray-200">Order Now</a>
          </div>
        </div>
      </section>

      <section id="menu" className="py-16 bg-gray-50 text-center">
        <h3 className="text-3xl font-bold mb-10 text-[#e63946]">Signature Dishes</h3>
        <div className="grid md:grid-cols-3 gap-8 px-4">
          {["soup-dumpling", "general-tso", "fitness-meal"].map((dish, i) => (
            <div key={i} className="bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition">
              <img src={`/${dish}.jpg`} alt={dish} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h4 className="text-xl font-semibold capitalize">{dish.replace("-", " ")}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white flex flex-col md:flex-row items-center max-w-6xl mx-auto">
        <img src="/logo.jpg" alt="Logo" className="w-full md:w-1/3 rounded-xl shadow mb-6 md:mb-0" />
        <div className="md:ml-12 space-y-5">
          <h3 className="text-2xl font-bold text-[#e63946]">About Bite Bao</h3>
          <p className="text-lg leading-relaxed">
            Bite Bao brings modern health to traditional Chinese-American cuisine. Handcrafted dumplings, balanced meals, and bold flavor—all made fresh for your lifestyle.
          </p>
          <a href="#order" className="inline-block bg-[#e63946] text-white px-6 py-3 rounded hover:bg-[#d62828]">Order Now</a>
        </div>
      </section>

      <section className="bg-gray-100 py-12 text-center text-lg space-y-2">
        <p>📍 1080 New York Ave, Huntington Station, NY 11746</p>
        <p>📞 347-556-8273</p>
        <p>🕒 Open Daily: 11AM – 9PM</p>
      </section>

      <footer className="py-10 text-center bg-white text-sm">
        <p className="mb-3 text-[#e63946] font-semibold">⭐ Leave us a review on Yelp and get a free appetizer!</p>
        <div className="space-x-4 text-[#e63946] font-semibold">
          <a href="https://yelp.com" target="_blank">Yelp</a>
          <a href="https://ubereats.com" target="_blank">UberEats</a>
          <a href="https://doordash.com" target="_blank">DoorDash</a>
        </div>
        <p className="mt-6 text-gray-400">© 2025 Bite Bao. All rights reserved.</p>
      </footer>
    </div>
  );
}
