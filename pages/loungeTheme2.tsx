import Head from "next/head";
import { useContext, useEffect, useRef } from "react";
import HeaderNav from "../components/theme2/HeaderNav";
import { AppContext } from "../providers/AppProvier";
import {
  motion,
  MotionValue,
  useMotionValue,
  useScroll,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import * as Color from "color";
import Card_1 from "../components/Card_1";
import Card_2 from "../components/Card_2";

export default function LoungeTheme2() {
  const { theme } = useContext(AppContext);
  const ref = useRef(null);

  const header = {
    hidden: { opacity: 0, y: -20 },
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const content = {
    hidden: { opacity: 0, y: -20 },
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const { scrollY } = useViewportScroll();

  const y1 = useTransform(scrollY, [500, 2000], [0, 100]);
  const y2 = useTransform(scrollY, [500, 2000], [100, -300]);

  return (
    <div
      className="h-screen"
      style={{
        backgroundColor: theme.background,
      }}
    >
      <Head>
        <title>FineTurtle | Lounge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderNav />

      <main className="pt-10 lg:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="max-w-[1370px] mx-auto px-4">
            <div
              className="h-32 lg:h-72 w-full mb-10 bg-center bg-cover"
              style={{
                backgroundImage: "url(/img/background-image.png)",
              }}
            />
            <div className="lg:flex">
              <div className="lg:w-[300px]">
                <div className="text-xs mb-6">
                  <strong>FINETURTLE</strong> - Lounge
                </div>
                <h2 className="text-3xl leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h2>
              </div>
              <div className="flex-1 mt-10 lg:mt-0 lg:ml-20">
                <p className="leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  hendrerit, urna nec molestie dictum, libero justo consectetur
                  sapien, in accumsan purus odio nec neque.
                  <strong>In ultrices eleifend</strong>
                  eleifend. Maecenas ac lectus non quam sollicitudin pretium.
                  Vivamus faucibus tellus condimentum elit molestie accumsan.
                  Maecenas ac lectus non quam sollicitudin pretium. <br />
                  <br /> Vivamus faucibus tellus condimentum elit molestie
                  accumsan.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="max-w-[1370px] mx-auto py-36 border-black/10 border-t mt-36 px-4">
            <p className="mb-10">01</p>
            <div className="lg:flex">
              <div className="lg:w-[600px]">
                <h2 className="text-3xl leading-relaxed">Lounge</h2>
              </div>
              <div>
                <p className="mt-10 lg:mt-0 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  hendrerit, urna nec molestie dictum, libero justo consectetur
                  sapien, in accumsan purus odio nec neque. In ultrices eleifend
                  eleifend. Maecenas ac lectus non quam sollicitudin pretium.
                  Vivamus faucibus tellus condimentum elit molestie accumsan.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-white"
          style={{
            backgroundColor: theme.primary,
          }}
          ref={ref}
        >
          <div className="max-w-[1370px] mx-auto py-36 border-black/10 border-t mt-36 relative  px-4">
            <p className="mb-10">02</p>
            <div className="flex">
              <div className="lg:w-[600px]">
                <h2 className="text-3xl leading-relaxed">Team</h2>
              </div>
              <div className="lg:absolute right-72 -top-20">
                <motion.div style={{ y: y1 }}>
                  <div className="bg-white w-56 h-64 rounded-lg relative m-10" />
                </motion.div>
                <motion.div style={{ y: y2 }}>
                  <div className="bg-white w-56 h-64 rounded-lg relative m-10 -left-32" />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="max-w-[1370px] mx-auto py-36 px-4">
            <p className="mb-10">03</p>
            <div className="lg:flex">
              <div className="lg:w-[600px]">
                <h2 className="text-3xl leading-relaxed">Test</h2>
              </div>
              <div>
                <p className="mt-10 lg:mt-0 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  hendrerit, urna nec molestie dictum, libero justo consectetur
                  sapien, in accumsan purus odio nec neque. In ultrices eleifend
                  eleifend. Maecenas ac lectus non quam sollicitudin pretium.
                  Vivamus faucibus tellus condimentum elit molestie accumsan.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
      <footer className="bg-gray-800 text-gray-600 flex item-center justify-center py-36 relative z-20">
        <div className="text-center px-10">
          <img
            src="/img/themes/theme2_palette_1/icon.png"
            className="mx-auto mb-10"
          />
          <div>Lounge | Manifesto | FineMap | Faq</div>
          <p className="mt-10">
            Maecenas ac lectus non quam sollicitudin pretium. Vivamus faucibus
            tellus condimentum elit molestie accumsan.
          </p>
        </div>
      </footer>
    </div>
  );
}

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [distance, -distance]);
}
