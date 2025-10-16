import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/sidebar";
import { assets } from "../assets/assets";
const AIPred = () => {
  const crops = [
    {
      name: "Wheat",
      price: "25",
      rise: "+2",
      description: "Demand rising in Punjab",
    },
    {
      name: "Rice",
      price: "40",
      rise: "-3",
      description: "Falling demand in UP",
    },
    {
      name: "Maize",
      price: "30",
      rise: "+1",
      description: "Steady in Haryana",
    },
    {
      name: "Barley",
      price: "20",
      rise: "+4",
      description: "Good export demand",
    },
    {
      name: "Soybean",
      price: "50",
      rise: "-2",
      description: "Weak global market",
    },
    {
      name: "Cotton",
      price: "60",
      rise: "+5",
      description: "Strong textile demand",
    },
  ];

  const risks = [{ description: "Price drop warning in your location" }];

  const Seasons = [
    { description: "Expected Heavy rain tomorrow at nearly 8PM" },
    { description: "Thunderstorm today at 5PM" },
  ];

  const Sells = [
    { time: "3-5", description: "Best selling window for maximum profit" },
    { time: "5-7", description: "Diwali coming next week" },
  ];

  const Demands = [
    { demand: "High", description: "Wheat price expected to rise by 5%" },
    { demand: "low", description: "Rice decreases by 2%" },
  ];

  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col px-30 py-10 w-full">
          <div className="flex justify-between mb-6">
            <div className="flex flex-col w-1/2">
              <p className="text-2xl font-bold mb-4">Market Overview</p>
              <div className="grid grid-rows-5 grid-cols-3  gap-y-4">
                {crops.slice(0, 5).map((crop, i) => (
                  <React.Fragment key={i}>
                    <div className="text-[18px]">{crop.name}</div>
                    <div className="text-[18px]">₹{crop.price}</div>
                    <div
                      className={`${
                        parseInt(crop.rise) > 0
                      ?"text-[#45AE30]":"text-[#AE3430]"} text-[18px]`}
                    >
                      {crop.rise}%
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className="flex flex-col w-1/2">
              <p className="text-2xl font-bold mb-4">AI Price Forecast</p>
              <div className="flex gap-3 mb-4">
                <div className="flex items-center gap-2 border rounded px-3 py-1.5 w-1/2">
                  <input
                    type="text"
                    placeholder="Enter Location"
                    className="outline-none w-full text-[16px]"
                  />
                </div>
                <div className="flex items-center gap-2 border rounded px-3 py-1.5 w-1/2">
                  <input
                    type="text"
                    placeholder="Crop name"
                    className="outline-none w-full text-[16px]"
                  />
                </div>
              </div>
              <div className="w-full h-50 bg-gray-100 flex items-center justify-center rounded text-xl">
                📈 Forecast Chart
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <p className="text-xl font-bold py-5">Top Opportunities</p>
              <div className="w-full flex gap-15">
                <div className="flex flex-col w-1/2 border-1 rounded-xl px-6 py-6 gap-1">
                  <div className="text-[22px] font-bold flex gap-2 items-center">
                    <img src={assets.vegan} className="w-7 h-7" />
                    <p>{crops[0].name}</p>
                  </div>
                  <div className="text-[18px] flex">{crops[0].description}</div>
                </div>
                <div className="flex flex-col w-1/2 border-1 rounded-xl px-6 py-6 gap-1">
                  <div className="text-[22px] font-bold flex gap-2 items-center">
                    <img src={assets.siren} className="w-7 h-7" />
                    <p>Risk Alerts</p>
                  </div>
                  <div className="text-[18px] flex">{crops[0].description}</div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col w-6/10 border-1 rounded-xl px-6 py-6 gap-1">
                <div className="text-[22px] font-bold flex gap-2 items-center">
                  <img src={assets.weather} className="w-7 h-7" />
                  <p>Seasonal Insights</p>
                </div>
                <div className="text-[18px] flex">{Seasons[0].description}</div>
              </div>
            </div>
            <div>
              <div className="w-full flex gap-15">
                <div className="flex flex-col w-4/10 border-1 rounded-xl px-6 py-6 gap-2">
                  <div className="text-[22px] font-bold flex gap-2 items-center">
                    <img src={assets.clock} className="w-7 h-7" />
                    <p>Best Time To Sell</p>
                  </div>
                  <div className="flex flex-col">
                    <div className="text-[12px] text-white font-semibold py-1 px-4 w-fit rounded-sm bg-[#84A585] flex">
                      {Sells[0].time} Days
                    </div>
                    <div className="text-[18px] flex">
                      {Sells[0].description}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-6/10 border-1 rounded-xl px-6 py-6 gap-2">
                  <div className="text-[22px] font-bold flex gap-2 items-center">
                    <img src={assets.radio} className="w-7 h-7" />
                    <p>Demand Forecast</p>
                  </div>
                  <div className="flex flex-col">
                    <div className="text-[12px] text-[#A43D0A] font-semibold py-1 px-4 w-fit rounded-sm bg-[#EDE2AA] flex">
                      {Demands[0].demand} Demand
                    </div>
                    <div className="text-[18px] flex">
                      {Demands[0].description}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIPred;
