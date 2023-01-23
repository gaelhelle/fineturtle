import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import useMouseEffect from "../components/useMouseEffect";
import { AppProvider } from "../providers/AppProvider";
import "../style.css";

function MyApp({ Component, pageProps, router }) {
  const mouseEffect = useMouseEffect();

  return (
    <AppProvider>
      <>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Anton&family=Montserrat:wght@100;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.pathname} />
        </AnimatePresence>
      </>
    </AppProvider>
  );
}

export default MyApp;
