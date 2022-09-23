import Image from "next/image";
import { useContext, useState } from "react";
import { motion } from "framer-motion";
import TextScrambler from "react-scramble-text";
import { AppContext } from "../providers/AppProvier";

const BottomSlider = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const { theme } = useContext(AppContext);

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  return (
    <div className="absolute bottom-10 left-10 hidden lg:block">
      <div className="relative">
        <motion.div
          animate={sliderIndex === 0 ? "open" : "closed"}
          variants={variants}
        >
          <SliderItem />
        </motion.div>

        <motion.div
          animate={sliderIndex === 1 ? "open" : "closed"}
          variants={variants}
        >
          <SliderItem type="secondary" />
        </motion.div>
      </div>

      <div className="mt-4 flex space-x-4">
        <div
          className="h-1 w-20 rounded transition-all"
          onClick={() => setSliderIndex(0)}
          style={{
            backgroundColor: theme.primary,
            opacity: sliderIndex === 0 ? "100%" : "20%",
          }}
        />
        <div
          className="h-1 w-20 rounded transition-all"
          onClick={() => setSliderIndex(1)}
          style={{
            backgroundColor: theme.primary,
            opacity: sliderIndex === 1 ? "100%" : "20%",
          }}
        />
      </div>
    </div>
  );
};

const SliderItem = ({ type }: any) => {
  const { theme } = useContext(AppContext);
  const phrases = ["Subscribe", "SUBSCRIBE"];

  return (
    <div
      className="rounded text-white absolute bottom-0 left-0"
      style={{
        backgroundColor: type === "secondary" ? theme.secondary : theme.primary,
      }}
    >
      <div className="relative px-6 py-4">
        <div className="flex items-center space-x-6">
          <div className="absolute -left-3 -bottom-[6px]">
            <Image src="/img/fine-turtle-1.png" width="100" height="100" />
          </div>
          <div className="flex-col flex uppercase pl-14">
            <span className="text-2xs opacity-70">For update</span>
            <div className=" w-24">
              <span className="text-sm font-medium text-white">
                <TextScrambler
                  phrases={phrases}
                  speed={20}
                  pauseTime={8000}
                  symbolColor="#fff"
                />
              </span>
            </div>
          </div>
          <div>
            <div className="relative">
              <input type="text" className="rounded shadow" />
              <span className="absolute right-2 text-black/80 uppercase text-2xs top-[4px] font-medium">
                ok
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomSlider;
