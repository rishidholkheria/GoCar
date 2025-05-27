import React from "react";

const CabDetailLayout = () => {
  return (
    <div
      className="
    w-full p-4 bg-[#D9D9D9] mt-2 rounded-md flex justify-center items-center cursor-pointer 
    transition duration-300 ease-in-out transform hover:scale-[1.015] 
    hover:shadow-md hover:ring-2 hover:ring-gray-400
    active:border-2 active:border-black
  "
    >
      <img src="/assets/carEx1.png" alt="Car" className="w-2/5" />
      <div className="w-3/5 pl-4">
        <h2 className="text-xl font-semibold">Maruti Swift Dzire</h2>
        <p className="text-gray-700">Price/Km : $12</p>
        <p className="text-gray-700">Passengers : 4</p>
        <p className="text-gray-700">Luggage : 2</p>
      </div>
    </div>
  );
};

export default CabDetailLayout;
