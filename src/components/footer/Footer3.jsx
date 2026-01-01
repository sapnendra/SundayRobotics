import { motion } from "motion/react";
import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const Footer3 = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  const paddingInline = useTransform(
    scrollYProgress,
    [0.6, 1],
    ["0px", "30px"]
  );
  const borderRadius = useTransform(scrollYProgress, [0.6, 1], ["0px", "20px"]);
  const height = useTransform(scrollYProgress, [0.6, 1], ["0px", "400px"]);
  const text = useTransform(scrollYProgress, [0.6, 1], ["1vw", "15vw"]);

  return (
    <motion.div
      ref={containerRef}
      className="bg-[#F7E83B]"
      style={{ paddingInline }}
    >
      <motion.div
        ref={containerRef}
        className="min-h-screen w-full px-6 space-y-5 bg-white"
        style={{
          borderBottomLeftRadius: borderRadius,
          borderBottomRightRadius: borderRadius,
        }}
      >
        <div className="h-[500px] w-full flex flex-col justify-center items-center bg-[#111111] rounded-[20px]">
          <h2 className="text-lg flex items-center gap-2 text-white">
            Be one of our Founding Families.{" "}
            <span className="text-[#E9E339]">
              Insider access. Exclusive perks. Design input.
            </span>
            <button className="px-7 py-2 border border-gray-200/20 rounded-full text-white">
              Beta program
            </button>
          </h2>
        </div>
        <div className="h-[170px] w-full flex items-center justify-center py-10 rounded-xl bg-gray-200">
          <h2 className="text-lg flex items-center gap-2 text-black">
            Be one of our Founding Families.{" "}
            <span className="text-gray-400">
              Insider access. Exclusive perks. Design input.
            </span>
            <button className="px-5 py-1 border border-gray-500 rounded-full text-black">
              Beta program
            </button>
          </h2>
        </div>

        <div className="h-[280px] w-full grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-4 py-10">
          <div className="flex flex-col justify-between">
            <h3 className="text-sm font-medium text-[#1a1a1a]">
              Sunday, the helpful robotics company
            </h3>
            <p className="text-sm text-[#666666] font-medium">
              © 2026 Sunday Inc
            </p>
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-6">
              <h3 className="text-sm font-medium text-[#1a1a1a]">Explore</h3>
              <ul className="flex flex-col gap-2 text-sm text-[#666666] font-medium">
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    Technology
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    Journal
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-6">
              <h3 className="text-sm font-medium text-[#1a1a1a]">About</h3>
              <ul className="flex flex-col gap-2 text-sm text-[#666666] font-medium">
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    Company
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    Beta Program
                  </a>
                </li>
              </ul>
            </div>
            <p className="text-sm text-[#666666] font-medium">
              <a href="#" className="hover:text-black transition-colors">
                Terms of Service
              </a>
            </p>
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-6">
              <h3 className="text-sm font-medium text-[#1a1a1a]">Social</h3>
              <ul className="flex flex-col gap-2 text-sm text-[#666666] font-medium">
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    X (Twitter)
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
            <p className="text-sm text-[#666666] font-medium">
              <a href="#" className="hover:text-black transition-colors">
                Privacy and Cookies
              </a>
            </p>
          </div>
        </div>
      </motion.div>
      <motion.h1
        className="w-full flex items-center justify-center font-bold uppercase leading-none"
        style={{ height, fontSize: text }}
      >
        Sheryians
      </motion.h1>
    </motion.div>
  );
};

export default Footer3;
