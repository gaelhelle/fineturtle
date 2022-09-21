import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef } from "react";
import BottomSlider from "../components/BottomSlider";
import HeaderNav from "../components/Header";
import { palette_1 } from "../variants";

import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";

export default function Home() {
  const ref = useRef();

  useEffect(() => {
    document.onmousemove = function (e) {
      document.body.style.setProperty("--x", e.clientX + "px");
      document.body.style.setProperty("--y", e.clientY + "px");

      ref.current.style.setProperty(
        "--y",
        (e.clientY - window.innerHeight / 2) / 50 + "px"
      );
      ref.current.style.setProperty(
        "--x",
        (e.clientX - window.innerWidth / 2) / 50 + "px"
      );
    };
  }, [ref.current]);

  return (
    <div
      className={`h-screen bg-[${palette_1.background}] border-[#317774] border-b-8`}
    >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-full">
        <HeaderNav />
        <div className="items-center justify-center w-full h-full flex overflow-hidden">
          <img
            ref={ref}
            src="/img/subtract.jpg"
            width="782"
            height="285"
            style={{
              WebkitMaskImage: `url("/img/middle-logo.png")`,
              mask: `url("/img/middle-logo.png")`,
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
            }}
            className="mt-96 image-masked"
          />
        </div>
      </main>

      <BottomSlider />
    </div>
  );
}
