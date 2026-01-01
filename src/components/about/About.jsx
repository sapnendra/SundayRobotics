import React from "react";

const About = () => {
  return (
    <div className="h-screen">
      <div className="">
        <h1 className="w-14/15 py-8 text-[2.4vw] font-semibold leading-[1.2] px-6">
          Built for busy households, Memo works 24/7 to make your life lighter.
          Hand off your repetitive to-do’s, so you can focus on what really
          matters.
        </h1>

        <div className="w-8/12 flex items-center justify-between gap-5 mx-auto my-25 p-5 border border-black/20 rounded-xl">
          <p className="w-5/12 font-medium text-center text-[0.9vw]">Robots should give you back what matters most — time. Watch how our team came together to work on this mission.</p>
          <div className="w-1/2">
            <img className="w-full h-full object-cover rounded-xl" src="https://imgs.search.brave.com/KVVomr_QvS5zA_TEROyA2jfy4t-LxbZ8CFQBL-HIm2w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cm9ib3RpY3MyNDcu/Y29tL2ltYWdlcy9s/ZWdhY3lfaW1hZ2Vz/L1N1bmRheS1NZW1v/LXBlcnNvbmFsLXNl/cnZpY2VzLXdoZWVs/ZWQtcm9ib3QtUm9i/b3RpY3MyNDctMjAy/NS5qcGc" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
