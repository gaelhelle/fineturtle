import BottomSlider from "../components/BottomSlider";
import HeaderNav from "../components/HeaderNav";
import { motion } from "framer-motion";
import { useContext } from "react";
import { AppContext } from "../providers/AppProvier";
import FooterNote from "../components/FooterNote";

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
      <div className="h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <img
                src="/img/home/text-fine.png"
                className="-top-16 relative md:block hidden"
                width="248"
                height="94"
              />
            </motion.div>

            <div className="flex flex-col items-center justify-center">
              <div className="bg-gray-100 h-48 w-64 relative -z-10 -mx-12 iosRounded"></div>
              <div className="flex items-center mt-10 md:hidden">
                <img src="/img/home/text-fine.png" width="100" height="40" />
                <img src="/img/home/text-turtle.png" width="150" height="60" />
              </div>
            </div>

            <div className="relative">
              <div className="fixed md:absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pt-20 md:-ml-16 pl-4">
                <motion.div
                  initial={{ opacity: 0, scale: 1.2 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                >
                  <img
                    src="/img/home/photo_2022-09-30_12-04-37.png"
                    width="528"
                    height="754"
                    className="max-w-none h-auto"
                  />
                </motion.div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <img
                src="/img/home/text-turtle.png"
                className="top-16 relative  md:block hidden"
                width="356"
                height="93"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
      <FooterNote />
    </>
  );
};

export default Theme1Index;
