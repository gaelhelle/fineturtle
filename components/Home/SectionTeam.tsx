import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionContainer from "../HOC/SectionInner";
import SectionRotatedText from "../SectionRotatedText";

const SectionTeam = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: scrollRef });
  const y1 = useTransform(scrollYProgress, [0, 1], [-100, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-300, -100]);
  const yOpacity = useTransform(scrollYProgress, [0.35, 0.4], [0, 1]);

  return (
    <SectionContainer
      name="the-team"
      className="bg-[color:var(--theme-primary)]"
    >
      <SectionRotatedText value="The Team" />
      <h2 className="title-page black-dot text-6xl lg:text-7xl uppercase mb-6">
        The dream team
      </h2>
      <div className="max-w-4xl">
        <p className="mb-4">
          For the FineTurtle legion to win, all hands are needed on deck.
        </p>
        <p>
          To achieve this, FineTurtle has a group of fine experts with
          experience in graphic design, tech, NFTs and other relevant
          disciplines. This dream team is what will make the dream real.
        </p>
      </div>
      <motion.div style={{ opacity: yOpacity }}>
        <motion.div
          className="absolute top-40 h-full"
          style={{ y: y2 }}
          viewport={{ root: scrollRef }}
        >
          <div className="absolute top-40 w-full -left-4 lg:-left-10">
            <div className="w-0.5 h-5 bg-black absolute top-0 left-0" />
            <div className="w-5 h-0.5 bg-black absolute top-0 left-0" />
          </div>
        </motion.div>
        <motion.div
          className="absolute -bottom-64 h-full"
          style={{ y: y1 }}
          viewport={{ root: scrollRef }}
        >
          <div className="absolute bottom-40 w-full  -left-4 lg:-left-10 -rotate-90">
            <div className="w-0.5 h-5 bg-black absolute top-0 left-0" />
            <div className="w-5 h-0.5 bg-black absolute top-0 left-0" />
          </div>
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
};

export default SectionTeam;
