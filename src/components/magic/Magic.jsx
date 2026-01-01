import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Magic = () => {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "20% 50%",
        end: "50% 50%",
        scrub: 1,
        pin: true,
      },
    });

    tl.from(text2Ref.current, {
      y: "20vh",
    }).from(
      text3Ref.current,
      {
        y: "40vh",
      },
      "-=0.3"
    );
  });

  return (
    <div
      ref={sectionRef}
      className="h-screen w-full flex flex-col items-center justify-center overflow-hidden relative"
    >
      <div
        ref={containerRef}
        className="flex gap-4 items-center justify-center text-[7vw] font-bold leading-none"
      >
        <h1>Mundane</h1>
        <h1 ref={text2Ref}>made</h1>
        <h1 ref={text3Ref}>magic</h1>
      </div>
      <div className="w-[40%] h-[60%] flex items-end justify-center mx-auto text-center text-[1.4vw] font-semibold">
        <p className="">
          Powered by state-of-the-art AI models and an ever-expanding Skill
          Library, Memo doesn't just know how to do a few tasks—Memo improves
          its skills faster than any robot that has come before it.
        </p>
      </div>
    </div>
  );
};

export default Magic;
