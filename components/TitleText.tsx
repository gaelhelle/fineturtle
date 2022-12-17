import {
  useViewportScroll,
  motion,
  useTransform,
  useScroll,
  MotionValue,
} from "framer-motion";
import { useRef } from "react";

type Props = {
  value: string;
  behind: string;
};

const TitleText = (props: Props) => {
  const { value, behind } = props;

  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: scrollRef });
  const y1 = useTransform(scrollYProgress, [0, 1], [-170, -250]);

  return (
    <div className="relative z-10" ref={scrollRef}>
      <h2 className="title-page text-6xl lg:text-7xl uppercase mb-6 relative">
        {value}
      </h2>
      <motion.div
        className="absolute -z-10 top-36 lg:top-14 -left-20"
        style={{ y: y1 }}
        viewport={{ root: scrollRef }}
      >
        <h3 className="break-words text-stroke pointer-events-none uppercase tracking-wider text-[14em] lg:text-[20em]">
          {behind}
        </h3>
      </motion.div>
    </div>
  );
};

export default TitleText;
