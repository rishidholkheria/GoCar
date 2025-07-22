import React from "react";
import { Lock } from "lucide-react"; // Optional: install lucide-react or use img/svg

const CabDetailLayout = () => {
  return (
    <div className="w-full border-l-4 border-[#FF6A00] bg-[#fdf0d8] rounded-md px-4 py-3 flex justify-between items-center mt-3">
      {/* Left - Car image */}
      <div className="flex items-center gap-4 w-2/3">
        <img
          src="/assets/carEx1.png"
          alt="Car"
          className="w-20 h-auto object-contain"
        />
        <div>
          <p className="text-sm font-bold text-[#151001] flex items-center gap-1">
            Next Available{" "}
            <span className="text-gray-400 cursor-pointer text-xs">ⓘ</span>
          </p>
          <p className="text-sm text-gray-700">1 - 4 passengers</p>
        </div>
      </div>

      {/* Right - Price and lock */}
      <div className="flex flex-col items-end">
        <p className="text-sm font-semibold text-[#151001]">Fixed Price</p>
        <p className="flex items-center gap-1 text-sm text-[#ff6a00] font-semibold">
          <Lock size={14} className="text-[#ff6a00]" />
          Dest required
        </p>
      </div>
    </div>
  );
};

export default CabDetailLayout;
