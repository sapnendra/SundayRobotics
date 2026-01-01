import React from "react";

const Intuition = () => {
  return (
    <div data-scroll data-scroll-speed="-0.5" className="h-screen px-6 bg-linear-to-b from-[#b7cec2] to-[#FFE7E2] relative z-1 overflow-hidden">
      <h1 className="h-full w-full flex items-center justify-center text-[4vw] font-bold text-white">
        From imitation to intuition
      </h1>
      <img
        data-scroll
        data-scroll-speed="0.2"
        className="absolute left-1/2 -translate-x-1/2 -bottom-70 w-170 object-cover"
        src="/intuition.webp"
        alt=""
      />
    </div>
  );
};

export default Intuition;
