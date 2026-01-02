import React from "react";
import { FaMessage } from "react-icons/fa6";
import { IoCall, IoLogoWhatsapp } from "react-icons/io5";
import { MdTimer } from "react-icons/md";
import { RiSpeedFill } from "react-icons/ri";

const SpeedAction = () => {
  return (
    <>
      <div className="fab fab-flower">
        {/* a focusable div with tabIndex is necessary to work on all browsers. role="button" is necessary for accessibility */}  
        <div
          tabIndex={0}
          role="button"
          className="btn btn-xl btn-circle w-25 h-25"
        >
          <RiSpeedFill className="w-12 h-12" />
        </div>

        {/* Main Action button replaces the original button when FAB is open */}
        <button className="fab-main-action btn btn-xl btn-circle bg-white border-none text-black w-25 h-25">
          <RiSpeedFill className="w-12 h-12" />
        </button>

        {/* buttons that show up when FAB is open */}
        <button className="btn btn-lg btn-circle w-20 h-20">
          <IoCall className="w-6 h-6" />
        </button>
        <button className="btn btn-lg btn-circle w-20 h-20">
          <FaMessage className="w-6 h-6" />
        </button>
        <button className="btn btn-lg btn-circle w-20 h-20">
          <MdTimer className="w-6 h-6" />
        </button>
        <button className="btn btn-lg btn-circle w-20 h-20">
          <IoLogoWhatsapp className="w-6 h-6" />
        </button>
      </div>
    </>
  );
};

export default SpeedAction;
