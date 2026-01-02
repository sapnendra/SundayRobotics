import React from "react";
import TiltedCard from "../react-bits/TiltedCard";

const MemoHomes = () => {
  return (
    <div className="min-h-screen px-6 mt-40 text-black">
      <div className="aspect-[16/9] rounded-xl relative">
        <img
          className="w-full h-full object-cover rounded-xl"
          src="https://imgs.search.brave.com/ejyQrjqAaKkJkO2nMc14z4fc2ENKmwUllLCmQxyC7Gw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aG9tZWNydXguY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDI1/LzExL1N1bmRheS1S/b2JvdGljcy1NZW1v/LUhvdXNlLVJvYm90/LXBpY2tzLXVwLXBs/YXRlcy1hbmQtZ2xh/c3Nlcy1mcm9tLWRp/bmluZy10YWJsZS0x/LmpwZw"
          alt=""
        />
        <h2 className="h-full w-full leading-none flex items-center justify-center bg-black/20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[4vw] font-bold rounded-xl">
          Memo works in homes it's never seen
        </h2>
      </div>
      <div className="h-[40vh] w-full mt-6 flex items-center justify-center gap-2">
        <div className="w-1/3 h-full bg-[#faf7eb] flex flex-col justify-between border border-black/50 rounded-xl p-2">
          <h2 className="text-[0.7vw]">
            Every home is different. Memo works in yours.
          </h2>
          <p className="text-[0.8vw] leading-[1.2]">
            We believe Memo should be easy to use in the real-world, working
            autonomously out-of-the-box. Hundreds of people in unique homes show
            Memo how chores are done each day, so Memo can robustly handle the
            chaos of real life.
          </p>
        </div>
        <div className="w-1/3 h-full rounded-xl relative">
          <TiltedCard
            imageSrc="https://imgs.search.brave.com/iiXRzXevvv8dfFh9FqgUtoIqzyMmJ_sZI9aOVg_-oTc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aG9tZWNydXguY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDI1/LzExL1N1bmRheS1S/b2JvdGljcy1NZW1v/LUhvdXNlLVJvYm90/LXBpY2tzLXVwLXBs/YXRlcy1hbmQtZ2xh/c3Nlcy1mcm9tLWRp/bmluZy10YWJsZS01/LmpwZw"
            altText="Kendrick Lamar - GNX Album Cover"
            containerHeight="100%"
            containerWidth="100%"
            imageHeight="100%"
            imageWidth="100%"
            rotateAmplitude={12}
            scaleOnHover={0.95}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
          />
        </div>
        <div className="w-1/3 h-full rounded-xl relative">
          <TiltedCard
            imageSrc="https://imgs.search.brave.com/iiXRzXevvv8dfFh9FqgUtoIqzyMmJ_sZI9aOVg_-oTc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aG9tZWNydXguY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDI1/LzExL1N1bmRheS1S/b2JvdGljcy1NZW1v/LUhvdXNlLVJvYm90/LXBpY2tzLXVwLXBs/YXRlcy1hbmQtZ2xh/c3Nlcy1mcm9tLWRp/bmluZy10YWJsZS01/LmpwZw"
            altText="Kendrick Lamar - GNX Album Cover"
            containerHeight="100%"
            containerWidth="100%"
            imageHeight="100%"
            imageWidth="100%"
            rotateAmplitude={12}
            scaleOnHover={0.95}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
          />
        </div>
      </div>
    </div>
  );
};

export default MemoHomes;
