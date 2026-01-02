import { useEffect } from "react";
import Navbar from "./components/common/navbar/Navbar";
import styles from "./app.module.scss";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Lenis from "lenis";
import Magic from "./components/magic/Magic";
import MemoKitchen from "./components/memoworks/MemoKitchen";
import LocomotiveScroll from "locomotive-scroll";
import { motion, useScroll, useTransform } from "motion/react";
import MemoHomes from "./components/memoworks/MemoHomes";
import MemoLearning from "./components/memoworks/MemoLearning";
import Intuition from "./components/intuition/Intuition";
import Footer2 from "./components/footer/Footer2";
import Footer3 from "./components/footer/Footer3";
import SpeedAction from "./components/daisyui/SpeedAction";
import HorizontalScroll from "./components/footer/HorizontalScroll";
import AccordianSection from "./components/footer/Accordian";

const App = () => {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [1050, 2200],
    ["#ffffffff", "#fffae6ff"]
  );

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <motion.main
      className={`${styles.main} select-none`}
      style={{ backgroundColor }}
    >
      <Navbar />
      <Hero />
      <About />
      <Magic />
      <MemoKitchen />
      <MemoHomes />
      <MemoLearning />
      <Intuition />
      <HorizontalScroll />
      <AccordianSection />
      <Footer2 />
      <Footer3 />
      <SpeedAction />
    </motion.main>
  );
};

export default App;
