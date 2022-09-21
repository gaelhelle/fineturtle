import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import { useEffect } from "react";
import { AppProvider } from "../providers/AppProvier";
import "../style.css";

function MyApp({ Component, pageProps, router }) {
  useEffect(() => {
    const mouseMove = (e) => {
      window.document.body.style.setProperty(
        "--xMask",
        (e.pageX - window.innerWidth / 2) / 50 + "px"
      );
      window.document.body.style.setProperty(
        "--yMask",
        (e.pageY - window.innerHeight / 2) / 50 + "px"
      );
      window.document.body.style.setProperty("--x", e.pageX + "px");
      window.document.body.style.setProperty("--y", e.pageY + "px");
    };

    window.addEventListener("mousemove", (e) => {
      mouseMove(e);
    });

    return () => {
      window.removeEventListener("mousemove", (e) => {
        mouseMove(e);
      });
    };
  }, []);

  return (
    <AppProvider>
      <>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Anton&family=Montserrat:wght@100;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <AnimatePresence exitBeforeEnter initial={false}>
          <Component {...pageProps} key={router.pathname} />
        </AnimatePresence>
      </>
    </AppProvider>
  );
}

export default MyApp;
