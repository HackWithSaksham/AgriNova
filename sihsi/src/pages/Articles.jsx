import React from "react";
import Navbar from "../components/Navbar";
import { assets } from "../assets/assets";

const Articles = () => {
  const articles = [
    {
      heading: "Sustainable Farming",
      Description:
        "Sustainable farming is an agricultural approach that aims to meet current food and textile needs without compromising the ability of future generations to meet theirs, balancing environmental health, economic profitability, and social well-being",
      time: "12 Sept 2025",
      Author: "James William",
    },
    {
      heading: "Sustainable Farming",
      Description:
        "Sustainable farming is an agricultural approach that aims to meet current food and textile needs without compromising the ability of future generations to meet theirs, balancing environmental health, economic profitability, and social well-being",
      time: "12 Sept 2025",
      Author: "James William",
    },
  ];

  const trendingtopics = [
    "Sustainable farming",
    "Organic Practices",
    "Govt.Schemes",
  ];

  return (
    <div className="flex flex-col">
      <Navbar />
      <p className="text-[30px] font-bold text-center pt-10 pb-10">
        Articles & Guides
      </p>
      <div className="flex gap-10 px-10 min-h-screen mx-60 shadow-2xl">
        <div className="flex flex-col gap-5 w-2/3">
          {articles.map((article, i) => (
            <div
              key={i}
              className="flex flex-col gap-5 border-1 border-black/10 rounded-[12px] px-7 py-5"
            >
              <div className="flex flex-col gap-2">
                <p className="flex text-[18px] font-bold">{article.heading}</p>
                <p>{article.Description}</p>
              </div>
              <div className="flex flex-col text-white bg-[#235C26] px-4 py-1 w-fit text-[14px] rounded-[5px] hover:cursor-pointer">
                Read more...
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-3 rounded-full">
                  <img src={assets.man} className="w-4 h-4" />
                  <p>{article.Author}</p>
                </div>
                <p>{article.time}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col w-3/10 gap-10">
          <div className="gap-7 rounded-[12px] border-1 border-black/10 h-fit px-5 py-4">
            <p className="text-[22px] font-bold">Quick Stats</p>
            <div className="flex flex-col gap-5">
              <div className="flex gap-10">
                <div>
                  <p className="font-bold text-xl">200+</p>
                  <div className="text-[16px]"> Articles published</div>
                </div>
                <div>
                  <p className="font-bold text-xl">50K</p>
                  <div className="text-[16px]">Monthly readers</div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[18px] font-bold">Trending Topics</p>
                <div className="flex flex-col gap-1">
                  {trendingtopics.map((topic, i) => (
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2">
                        <p className="rounded-full w-2 h-2 bg-black"></p>
                        <p>{topic}</p>
                      </div>
                      <div>
                        <img src={assets.arrowright} className="w-4 h-4" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="gap-7 rounded-[10px] border-1 border-black/10 h-fit px-4 py-1">
            <div>
              <img src={} className="w-3 h-3"/>
              <input type="text" placeholder="Filter by catoegory" />
            </div>
            <img src={} className="w-3 h-3"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
