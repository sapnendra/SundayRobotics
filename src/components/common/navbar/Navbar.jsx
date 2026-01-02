import React, { useState } from "react";
import styles from "./navbar.module.scss";
import Logo from "../logo/Logo";
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
    console.log("Hello");
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
          <motion.div key={1} className={`${styles.navContainer}`}>
            <Logo />
            <button className={`${styles.navButton} text-black`}>Sunday</button>
            <div onClick={handleHamburgerMenu} className={styles.hamburgerMenu}>
              <motion.span className={styles.hamburgerMenuSpan}></motion.span>
              <motion.span className={styles.hamburgerMenuSpan}></motion.span>
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
            Say Hello to Memo
          </h1>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
