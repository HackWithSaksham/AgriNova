import React from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/sidebar';
const AIPred = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col px-15 py-10 w-full">
          <div className="flex justify-between mb-6">
            <div className="flex flex-col w-1/2">
              <p className="text-3xl font-bold mb-4">Market Overview</p>
              <table className="w-3/4 text-left">
                <tbody>
                  <tr>
                    <td className="py-2 text-2xl">Wheat</td>
                    <td className="text-2xl">₹20/Kg</td>
                    <td className="text-green-600 text-2xl">+3%</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-2xl">Rice</td>
                    <td className="text-2xl">₹24/Kg</td>
                    <td className="text-red-600 text-2xl">-2%</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-2xl">Coffee</td>
                    <td className="text-2xl">₹60/Kg</td>
                    <td className="text-green-600 text-2xl">+18%</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-2xl">Rice</td>
                    <td className="text-2xl">₹24/Kg</td>
                    <td className="text-red-600 text-2xl">-2%</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-2xl">Bajra</td>
                    <td className="text-2xl">₹60/Kg</td>
                    <td className="text-green-600 text-2xl">+8%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex flex-col w-1/2 px-6">
              <p className="text-3xl font-bold mb-4">AI Price Forecast</p>
              <div className="flex gap-3 mb-4">
                <div className="flex items-center gap-2 border rounded px-3 py-2 w-1/2">
                  <input
                    type="text"
                    placeholder="Enter Location"
                    className="outline-none w-full text-xl"
                  />
                </div>
                <div className="flex items-center gap-2 border rounded px-3 py-2 w-1/2">
                  <input
                    type="text"
                    placeholder="Crop name"
                    className="outline-none w-full text-xl"
                  />
                </div>
              </div>
              <div className="w-full h-60 bg-gray-100 flex items-center justify-center rounded text-2xl">
                📈 Forecast Chart
              </div>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-3xl font-bold mb-4">Top Opportunities</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="border rounded-lg p-4">
                <p className="font-bold text-2xl">Wheat</p>
                <p className="text-xl">
                  Demand rising in Punjab, price expected to increase 10% next
                  week
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <p className="font-bold text-2xl">Alerts</p>
                <p className="text-xl">
                  Price Drop warning in your location and near areas of Uttar
                  Pradesh
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <p className="font-bold text-2xl">Seasonal Insights</p>
                <p className="text-xl">
                  Expected heavy rain tomorrow at nearly 8 PM
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <p className="font-bold text-2xl">Best Time To Sell</p>
                <p className="text-xl">Best Selling window for maximum profit</p>
              </div>
              <div className="border rounded-lg p-4 col-span-2">
                <p className="font-bold text-2xl">Demand Forecast</p>
                <p className="text-xl">
                  Wheat price expected to rise by 40%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AIPred
