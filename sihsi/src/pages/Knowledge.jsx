import React from "react";
import Navbar from "../components/Navbar";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Knowledge = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex flex-col mx-85 px-10 py-10 gap-15 shadow-2xl">
        <div>
          <p className="text-[27px] font-bold leading-12">Knowledge Hub</p>
          <p className="text-[15px]">
            Your one-step resource for farming knowledge
          </p>
        </div>
        <div className="flex flex-col gap-3 px-10">
          <div className="flex text-[21px] font-bold">Learning Resource</div>
          <div className="flex gap-6">
            <Link to="/knowledge/articles" className="hover:scale-105 transition-transform duration-200 cursor-pointer flex flex-col w-1/3 border rounded-[5px] items-center pt-3 pb-6 gap-5">
              <div>
                <img src={assets.article} className="w-47 h-25 rounded-[5px]" />
              </div>
              <div className="w-47 text-left">
                <p className="font-bold text-[15px]">Articles & Guides</p>
                <p className="text-[13px]">Descriptive knowledge about farming techniques</p>
              </div>
            </Link>

            <Link to="/knowledge/video-tutorials" className="hover:scale-105 transition-transform duration-200 cursor-pointer flex flex-col w-1/3 border rounded-[5px] items-center pt-3 pb-6 gap-5">
              <div>
                <img src={assets.tutorials} className="w-47 h-25 rounded-[5px]" />
              </div>
              <div className="w-47 text-left">
                <p className="font-bold text-[15px]">Step-by-step Tutorials</p>
                <p className="text-[13px]">Video tutorials on machinery working and various techniques.</p>
              </div>
            </Link>

            <Link to="/knowledge/infographics" className="hover:scale-105 transition-transform duration-200 cursor-pointer flex flex-col w-1/3 border rounded-[5px] items-center pt-3 pb-6 gap-5">
              <div>
                <img src={assets.pdf} className="w-47 h-25 rounded-[5px]" />
              </div>
              <div className="w-47 text-left">
                <p className="font-bold text-[15px]">Infographics & Docs</p>
                <p className="text-[13px]">Quick tips,seasonal crop calender</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-3 px-10">
          <div className="flex text-[21px] font-bold">Marketing Insights</div>
          <div className="flex gap-6">
            <Link to="/knowledge/croptrends" className="hover:scale-105 transition-transform duration-200 cursor-pointer flex flex-col w-1/3 border rounded-[5px] items-center pt-3 pb-6 gap-5">
              <div>
                <img src={assets.croptrends} className="w-47 h-25 rounded-[5px]" />
              </div>
              <div className="w-47 text-left">
                <p className="font-bold text-[15px]">Crop Price Trends</p>
                <p className="text-[13px]">Know real time updates from mandis & stocks</p>
              </div>
            </Link>

            <Link to="/knowledge/weatherupdates" className="hover:scale-105 transition-transform duration-200 cursor-pointer flex flex-col w-1/3 border rounded-[5px] items-center pt-3 pb-6 gap-5">
              <div>
                <img src={assets.weatherupdates} className="w-47 h-25 rounded-[5px]" />
              </div>
              <div className="w-47 text-left">
                <p className="font-bold text-[15px]">Weather & Climate Update</p>
                <p className="text-[13px]">Daily advice for farming practices</p>
              </div>
            </Link>

            <Link to="/knowledge/govtschemes" className="hover:scale-105 transition-transform duration-200 cursor-pointer flex flex-col w-1/3 border rounded-[5px] items-center pt-3 pb-6 gap-5">
              <div>
                <img src={assets.govtschemes} className="w-47 h-25 rounded-[5px]" />
              </div>
              <div className="w-47 text-left">
                <p className="font-bold text-[15px]">Government Schemes</p>
                <p className="text-[13px]">Short explainers of subsidies,loans and grants for farmers.</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-3 px-10">
          <div className="flex text-[21px] font-bold">Tech & Innovation</div>
          <div className="flex gap-6">
            <Link to="/knowledge/agrimachines" className="hover:scale-105 transition-transform duration-200 cursor-pointer flex flex-col w-1/3 border rounded-[5px] items-center pt-3 pb-6 gap-5">
              <div>
                <img src={assets.agriculturemachines} className="w-47 h-25 rounded-[5px]" />
              </div>
              <div className="w-47 text-left">
                <p className="font-bold text-[15px]">New Tools & Machinery</p>
                <p className="text-[13px]">Know real time updates from mandis & stocks</p>
              </div>
            </Link>

            <Link to="/knowledge/agriresearch" className="hover:scale-105 transition-transform duration-200 cursor-pointer flex flex-col w-1/3 border rounded-[5px] items-center pt-3 pb-6 gap-5">
              <div>
                <img src={assets.research} className="w-47 h-25 rounded-[5px]" />
              </div>
              <div className="w-47 text-left">
                <p className="font-bold text-[15px]">Latest Research In Agri-tech</p>
                <p className="text-[13px]">Daily advice for farming practices</p>
              </div>
            </Link>

            <Link to="/knowledge/agriai" className="hover:scale-105 transition-transform duration-200 cursor-pointer flex flex-col w-1/3 border rounded-[5px] items-center pt-3 pb-6 gap-5">
              <div>
                <img src={assets.aiinagriculture} className="w-47 h-25 rounded-[5px]" />
              </div>
              <div className="w-47 text-left">
                <p className="font-bold text-[15px]">AI/IoT Application In Farming</p>
                <p className="text-[13px]">Short explainers of subsidies,loans and grants for farmers.</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-3 px-10">
          <div className="flex text-[21px] font-bold">Student & Research Center</div>
          <div className="flex gap-6">
            <Link to="/knowledge/agrires" className="hover:scale-105 transition-transform duration-200 cursor-pointer flex flex-col w-1/3 border rounded-[5px] items-center pt-3 pb-6 gap-5">
              <div>
                <img src={assets.researchsum} className="w-47 h-25 rounded-[5px]" />
              </div>
              <div className="w-47 text-left">
                <p className="font-bold text-[15px]">Research Summaries</p>
                <p className="text-[13px]">Know real time updates from mandis & stocks</p>
              </div>
            </Link>

            <Link to="/knowledge/internship" className="hover:scale-105 transition-transform duration-200 cursor-pointer flex flex-col w-1/3 border rounded-[5px] items-center pt-3 pb-6 gap-5">
              <div>
                <img src={assets.internship} className="w-47 h-25 rounded-[5px]" />
              </div>
              <div className="w-47 text-left">
                <p className="font-bold text-[15px]">Internship Opportunities</p>
                <p className="text-[13px]">Daily advice for farming practices</p>
              </div>
            </Link>

            <Link to="/knowledge/journals" className="hover:scale-105 transition-transform duration-200 cursor-pointer flex flex-col w-1/3 border rounded-[5px] items-center pt-3 pb-6 gap-5">
              <div>
                <img src={assets.journals} className="w-47 h-25 rounded-[5px]" />
              </div>
              <div className="w-47 text-left">
                <p className="font-bold text-[15px]">Journals & Open Data</p>
                <p className="text-[13px]">Short explainers of subsidies,loans and grants for farmers.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Knowledge;
