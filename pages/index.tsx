import Head from "next/head";
import { useContext, useEffect, useRef } from "react";
import BottomSlider from "../components/BottomSlider";
import HeaderNav from "../components/Header";
import { AppContext } from "../providers/AppProvier";
import { motion } from "framer-motion";

export default function Home() {
  const { theme } = useContext(AppContext);

  const variants = {
    hidden: { opacity: 0, y: 10 },
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  return (
    <div
      className="h-screen border-b-8"
      style={{
        borderColor: theme.primary,
      }}
    >
      <Head>
        <title>FineTurtle | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-full">
        <HeaderNav />
        <motion.div
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ ease: "backOut" }}
          className="items-center justify-center w-full h-full flex overflow-hidden absolute"
        >
          <img
            src={`/img/themes/${theme.name}/subtract.jpg`}
            style={{
              WebkitMaskImage: `url("/img/middle-logo.png")`,
              WebkitMaskSize: `contain`,
              mask: `url("/img/middle-logo.png")`,
              WebkitMaskRepeat: "no-repeat",
              maskSize: "contain",
              maskRepeat: "no-repeat",
            }}
            className="lg:mt-96 image-masked w-full lg:w-auto"
          />
        </motion.div>
      </main>

      <BottomSlider />
    </div>
  );
}
