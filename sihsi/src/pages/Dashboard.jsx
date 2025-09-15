import React from "react";
import { BarChart3, Package, ShoppingBag, DollarSign } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-green-800 text-white">
        <div className="font-bold text-xl">🌾 KisanConnect</div>
        <div className="flex gap-6">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">My Products</a>
          <a href="#" className="hover:underline">AI Trends</a>
          <a href="#" className="hover:underline">My Orders</a>
          <a href="#" className="hover:underline">Add Product</a>
        </div>
        <div className="flex gap-3">
          <button className="bg-white text-green-800 px-3 py-1 rounded-lg">Login</button>
        </div>
      </nav>

      {/* Hero Banner */}
      <section className="bg-[url('https://source.unsplash.com/1600x400/?farm,field')] bg-cover bg-center h-48 flex items-center justify-center text-white">
        <h1 className="text-3xl md:text-4xl font-bold drop-shadow-lg">
          Fair Prices, Direct from Farmers
        </h1>
      </section>

      <main className="flex-1 px-8 py-6">
        {/* Categories */}
        <h2 className="text-xl font-semibold mb-4">Categories</h2>
        <div className="grid grid-cols-5 gap-4 mb-8">
          {["Vegetables", "Fruits", "Pulses", "Grains", "Spices"].map((cat, i) => (
            <div
              key={i}
              className="bg-white shadow rounded-2xl p-6 text-center hover:shadow-lg transition"
            >
              <div className="w-12 h-12 mx-auto bg-gray-200 rounded-full mb-2"></div>
              <p>{cat}</p>
            </div>
          ))}
        </div>

        {/* Products */}
        <h2 className="text-xl font-semibold mb-4">Products</h2>
        <div className="grid grid-cols-4 gap-6 mb-8">
          {[
            { name: "Wheat", qty: "25Kg", img: "https://source.unsplash.com/200x200/?wheat" },
            { name: "Mustard", qty: "10Kg", img: "https://source.unsplash.com/200x200/?mustard" },
            { name: "Beans", qty: "12Kg", img: "https://source.unsplash.com/200x200/?beans" },
            { name: "Coffee", qty: "24Kg", img: "https://source.unsplash.com/200x200/?coffee" },
          ].map((p, i) => (
            <div
              key={i}
              className="bg-white shadow rounded-2xl overflow-hidden hover:shadow-lg transition"
            >
              <img src={p.img} alt={p.name} className="w-full h-32 object-cover" />
              <div className="p-4">
                <p className="font-semibold">{p.name}</p>
                <p className="text-sm text-gray-500">{p.qty}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <h2 className="text-xl font-semibold mb-4">Quick Stats</h2>
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-green-700 text-white p-6 rounded-2xl flex items-center gap-4">
            <Package /> <span>Products Listed</span>
          </div>
          <div className="bg-green-700 text-white p-6 rounded-2xl flex items-center gap-4">
            <ShoppingBag /> <span>Orders: 15</span>
          </div>
          <div className="bg-green-700 text-white p-6 rounded-2xl flex items-center gap-4">
            <DollarSign /> <span>Revenue: ₹15,000</span>
          </div>
        </div>

        {/* Recent Orders */}
        <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
        <table className="w-full bg-white shadow rounded-2xl overflow-hidden mb-8">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Order ID</th>
              <th className="px-4 py-2 text-left">Product</th>
              <th className="px-4 py-2 text-left">Quantity</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="px-4 py-2">#1</td>
              <td className="px-4 py-2">Wheat</td>
              <td className="px-4 py-2">50Kg</td>
              <td className="px-4 py-2 text-yellow-600">Pending</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">#2</td>
              <td className="px-4 py-2">Rice</td>
              <td className="px-4 py-2">60Kg</td>
              <td className="px-4 py-2 text-green-600">Completed</td>
            </tr>
          </tbody>
        </table>

        {/* AI Trends */}
        <h2 className="text-xl font-semibold mb-4">AI Trends</h2>
        <div className="bg-white shadow rounded-2xl p-6">
          <div className="flex justify-between mb-2">
            <span className="font-semibold">Market price</span>
            <span>₹30</span>
          </div>
          <div className="h-32 flex items-center justify-center text-gray-400">
            [Graph Placeholder]
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-green-900 text-white p-6 mt-6">
        <div className="grid grid-cols-3 gap-6 text-sm">
          <div>
            <h3 className="font-semibold mb-2">Get to know us</h3>
            <p>About Us</p>
            <p>Careers</p>
            <p>Terms of Service</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Categories</h3>
            <p>Vegetables</p>
            <p>Fruits</p>
            <p>Pulses</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Help</h3>
            <p>Customer Support</p>
            <p>FAQs</p>
          </div>
        </div>
        <p className="text-center mt-6 text-xs">
          © 2025 KisanConnect. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Dashboard;
