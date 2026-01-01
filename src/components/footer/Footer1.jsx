import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Footer1 = () => {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);

  useGSAP(() => {
    const container = containerRef.current;
    const section = sectionRef.current;

    const scrollWidth = section?.scrollWidth;
    const viewportWidth = window.innerWidth;

    const scrollDistance = scrollWidth - viewportWidth + 70;

    gsap.to(section, {
      x: -scrollDistance,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "35% top",
        end: `+=${scrollDistance}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });
  });

  return (
    <div className="h-[150vh] w-full px-6 flex items-end" ref={containerRef}>
      <div className="h-screen w-full flex flex-col items-center justify-between">
        <h2 className="w-full flex items-center justify-center text-[8vw] text-center font-bold leading-none py-10">
          Designed for reeal use
        </h2>

        <div className="w-full h-full flex items-end overflow-x-hidden">
          <div ref={sectionRef} className="h-6/7 w-full flex gap-2">
            <div className="shrink-0 relative h-full w-110 rounded-xl relative">
              <img
                className="w-full h-full object-cover rounded-xl"
                src="https://www.sunday.ai/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F1omys9i3%2Fproduction%2Ff085507a0a9c42a1c67e34b8e437415b902eb721-1000x1500.jpg&w=1080&q=90"
                alt=""
              />
              <div className="p-3 absolute top-0 left-0">
                <h3 className="text-xl text-white">
                  Your privacy is protected
                </h3>
                <p className="text-white/70">
                  Memo is an autonomous robot that does not need to learn
                  through human tele-operation. Instead, we obtain training data
                  from our Memory Developers wearing our Skill Capture Glove™.
                </p>
              </div>
            </div>
            <div className="shrink-0 relative h-full w-220 bg-[#EADCCE] flex rounded-xl p-3">
              <div className="">
                <p>Safety for the whole family</p>
                <p className="text-black/50">
                  With a low center of gravity, stable wheelbase, and a
                  lightweight body, Memo is safe for small members of the home.
                </p>
              </div>
              <img
                className="w-full h-full object-cover rounded-xl"
                src="https://www.sunday.ai/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F1omys9i3%2Fproduction%2F9452c1ea3839be4911ffde16cb4c30088dc28c88-1800x2400.jpg&w=1920&q=90"
                alt=""
              />
            </div>
            <div className="shrink-0 relative h-full w-110 rounded-xl relative">
              <img
                className="w-full h-full object-cover rounded-xl"
                src="https://www.sunday.ai/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F1omys9i3%2Fproduction%2F552fb76726fffc5940dd593d08b8b2c92c87bbf3-1800x2400.jpg&w=1920&q=90"
                alt=""
              />
              <div className="p-3 absolute top-0 left-0">
                <h3 className="text-xl text-white">Tailored to your home</h3>
                <p className="text-white/70">
                  Memo is an autonomous robot that does not need to learn
                  through human tele-operation.
                </p>
              </div>
            </div>
            <div className="shrink-0 relative h-full w-220 bg-[#EADCCE] flex rounded-xl p-3">
              <div className="">
                <p>Safety for the whole family</p>
                <p className="text-black/50">
                  With a low center of gravity, stable wheelbase, and a
                  lightweight body, Memo is safe for small members of the home.
                </p>
              </div>
              <img
                className="w-full h-full object-cover rounded-xl"
                src="https://www.sunday.ai/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F1omys9i3%2Fproduction%2F9452c1ea3839be4911ffde16cb4c30088dc28c88-1800x2400.jpg&w=1920&q=90"
                alt=""
              />
            </div>
            <div className="shrink-0 relative h-full w-110 rounded-xl relative">
              <img
                className="w-full h-full object-cover rounded-xl"
                src="https://www.sunday.ai/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F1omys9i3%2Fproduction%2Fe3ea85df1f48da9073ddb0a6f69fe17e8e06fe3e-1800x2400.jpg&w=1920&q=90"
                alt=""
              />
              <div className="p-3 absolute top-0 left-0">
                <h3 className="text-xl text-white">
                  Simple, soft and easy to clean
                </h3>
                <p className="text-white/70">
                  Memo is an autonomous robot that does not need to learn
                  through human tele-operation. Through human tele-operation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer1;
