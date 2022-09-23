import BottomSlider from "../components/BottomSlider";
import HeaderNav from "../components/HeaderNav";
import { motion } from "framer-motion";
import { useContext } from "react";
import { AppContext } from "../providers/AppProvier";

const Theme1Index = () => {
  const { theme } = useContext(AppContext);

  const variants = {
    hidden: { opacity: 0, y: 10 },
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  return (
    <>
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
      <BottomSlider />
    </>
  );
};

export default Theme1Index;
