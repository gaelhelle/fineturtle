import { motion } from "framer-motion";
import FooterNote from "../components/FooterNote";

const HomePage = () => {
  return (
    <>
      <div className="h-screen flex items-center justify-center overflow-hidden px-10">
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
                className="-top-32 md:-top-16 relative transition-all"
                width="248"
                height="94"
              />
            </motion.div>

            <div className="flex flex-col items-center justify-center">
              <div className="bg-gray-100 h-48 w-64 relative -z-10 -mx-12 iosRounded"></div>
            </div>

            <div className="relative">
              <div className="fixed md:absolute z-10 ml-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pt-20 md:ml-7 pl-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 0.65 }}
                >
                  <img
                    src="/img/home/turtle-min.png"
                    width="746"
                    height="1000"
                    className="max-w-none h-auto scale-90 md:scale-100 transition-all origin-[20px_20px]"
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
                className="-top-16 md:top-16 relative transition-all"
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

export default HomePage;
