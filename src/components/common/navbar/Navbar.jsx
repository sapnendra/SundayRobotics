import React, { useState } from "react";
import styles from "./navbar.module.scss";
import Logo from "../logo/Logo";
import TrueFocus from "../../react-bits/TrueFocus";
import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
  useTransform,
} from "motion/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 50 && !isOpen) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });

  const handleHamburgerMenu = () => {
    setIsOpen(!isOpen);
  };

  const opacity = useTransform(scrollY, [600, 800], [1, 0]);

  return (
    <nav className={`${styles.nav} flex flex-col items-center justify-between`}>
      <motion.div
        className="w-full flex justify-center"
        animate={{ marginTop: isHidden ? -100 : 0 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        <AnimatePresence>
          <motion.div
            key={1}
            animate={{ scale: isOpen ? 0 : 1 }}
            transition={{ duration: 0.2 }}
            className={`${styles.navContainer}`}
          >
            <Logo />
            <button className={`${styles.navButton} text-black`}>Sunday</button>
            <div onClick={handleHamburgerMenu} className={styles.hamburgerMenu}>
              <motion.span className={styles.hamburgerMenuSpan}></motion.span>
              <motion.span className={styles.hamburgerMenuSpan}></motion.span>
            </div>
          </motion.div>
          <motion.div
            key={2}
            animate={{ scale: isOpen ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            className={`${styles.bigNavContainer} absolute top-6 left-1/2 -translate-x-1/2`}
          >
            <div className="flex items-center justify-between text-black">
              <Logo />
              <button className={`${styles.navButton} text-black`}>
                Sunday
              </button>
              <div
                onClick={handleHamburgerMenu}
                className={styles.hamburgerMenu}
              >
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 3.5 : 0 }}
                  transition={{ duration: 0.2 }}
                  className={`${styles.hamburgerMenuSpan}`}
                ></motion.span>
                <motion.span
                  animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -3.5 : 0 }}
                  transition={{ duration: 0.2 }}
                  className={`${styles.hamburgerMenuSpan}`}
                ></motion.span>
              </div>
            </div>
            <div className="w-full flex py-10">
              <div className="left w-2/3">
                <h4 className="text-2xl text-black mb-2 cursor-pointer">
                  Technology
                </h4>
                <h4 className="text-2xl text-black mb-2 cursor-pointer">
                  Business
                </h4>
                <h4 className="text-2xl text-black mb-2 cursor-pointer">
                  Entertainment
                </h4>
                <h4 className="text-2xl text-black mb-2 cursor-pointer">
                  Health
                </h4>
                <h4 className="text-2xl text-black mb-2 cursor-pointer">
                  Science
                </h4>
              </div>
              <div className="right w-2/3">
                <img
                  className="w-full h-full object-cover rounded-xl"
                  src="/thumbnail.webp"
                  alt="thumbnail"
                />
              </div>
            </div>
            <div className="flex items-center justify-between text-black/50">
              <p>Lorem, ipsum dolor</p>
              <p>Lorem ipsum</p>
              <p>Lorem ipsum</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <motion.div
        className="mt-25 fixed z-99"
        style={{ opacity }}
        animate={{ y: isHidden ? -20 : 0 }}
        transition={{ duration: 0.3, ease: "linear" }}
      >
        <div className="flex flex-col items-center justify-between">
          <p className="text-md text-black">The helpful home robot</p>
          <p className="text-lg text-black/50">Beta launching late 2026</p>
        </div>

        <div className="flex items-center justify-center">
          <h1 className="text-[8vw] pt-10 leading-none text-black mix-blend-difference font-semibold leading-tighter tracking-normal">
            <TrueFocus
              sentence="Say Hello, Memo"
              manualMode={true}
              blurAmount={7}
              borderColor="#EF5F27"
              animationDuration={0.5}
              pauseBetweenAnimations={1}
            />
          </h1>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
