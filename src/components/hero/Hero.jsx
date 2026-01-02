import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Hero = () => {
  const containerRef = useRef(null);
  const ctxRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  const paddingInline = useTransform(
    scrollYProgress,
    [0.6, 1],
    ["50px", "0px"]
  );
  const borderRadius = useTransform(
    scrollYProgress,
    [0.6, 1],
    ["40px", "0px"]
  );

  useGSAP(() => {
    gsap.to(ctxRef.current, {
      opacity: 0,
      y: 100,
      duration: 0.8,
      ease: "linear",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "100% 100%",
        end: "85% 70%",
        scrub: true,
      },
    });
  });

  return (
    <motion.section
      ref={containerRef}
      style={{ paddingInline, borderRadius }}
      className="h-screen relative mt-20"
    >
      <motion.img
        className="w-full h-full object-cover border-2 border-gray-200"
        style={{ borderRadius }}
        src="https://imgs.search.brave.com/MvLB_iBANprHV_fI0FJvIboTx9HfmUkxTFgWw1OH1Dc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbnRl/cmVzdGluZ2VuZ2lu/ZWVyaW5nLmNvbS9f/bmV4dC9pbWFnZT91/cmw9aHR0cHM6Ly9j/bXMuaW50ZXJlc3Rp/bmdlbmdpbmVlcmlu/Zy5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjUvMTEvVGh1/bWJuYWlscy1mb3It/SUUtYXJ0aWNsZXMt/TWVtby1Sb2JvdC5q/cGcmdz0zODQwJnE9/NzU"
        alt="Sunday AI"
      />

      <motion.div
        ref={ctxRef}
        className="sticky bottom-8 w-fit px-5 py-4 rounded-full bg-[#f7e731] mx-auto flex items-center justify-between gap-3"
      >
        <p className="text-sm text-black tracking-widest font-semibold">
          Join the Founding Family
        </p>
        <p className="text-sm tracking-widest text-black/50 font-sm flex items-center gap-1">
          Apply to the beta
          <span className="p-1 rounded-full bg-black/50"></span>
        </p>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
