import BottomSlider from "../components/BottomSlider";
import HeaderNav from "../components/theme2/HeaderNav";
import { motion } from "framer-motion";
import { useContext } from "react";
import { AppContext } from "../providers/AppProvier";

const Theme2Index = () => {
  const { theme } = useContext(AppContext);

  return (
    <>
      <HeaderNav />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="absolute flex items-center justify-center h-full left-0 right-0 top-0"
      >
        <div className="p-10">
          <img src="/img/themes/theme2_palette_1/main-illustration.png" />
        </div>
      </motion.div>
    </>
  );
};

export default Theme2Index;
