import { motion } from "framer-motion";
import FooterNote from "../components/FooterNote";

const HomePage = () => {
  return (
    <>
      <div className="h-screen flex items-center justify-center overflow-hidden px-4 md:px-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative z-10"
        >
          <div className="flex items-center">
            <div>
              <img src="/img/home/text-fine.png" width="378" height="141" />
            </div>
            <div>
              <img src="/img/home/text-turtle.png" width="543" height="142" />
            </div>
          </div>
        </motion.div>
        <h3 className="break-words text-stroke text-stroke-light pointer-events-none uppercase tracking-wider text-[14em] lg:text-[27em] absolute mt-28 z-0">
          pioneers
        </h3>
      </div>
      <div className="fixed right-0 bottom-0 px-8 lg:px-32 mb-6 md:mb-12">
        <FooterNote />
      </div>
    </>
  );
};

export default HomePage;
