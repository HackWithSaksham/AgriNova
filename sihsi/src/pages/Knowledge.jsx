import React from "react";
import Navbar from "../components/Navbar";

const Knowledge = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex flex-col px-40 py-10 gap-15">
        <div>
          <p className="text-[55px] font-bold leading-15">Knowledge Hub</p>
          <p className="text-[25px]">
            Your one-step resource for farming knowledge
          </p>
        </div>
        <div>
          <p className="text-[45px] font-bold">Learning Resource</p>
          <div>
            <div>
                
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Knowledge;
