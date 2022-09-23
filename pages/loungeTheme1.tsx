import Head from "next/head";
import { useContext } from "react";
import HeaderNav from "../components/HeaderNav";
import { AppContext } from "../providers/AppProvier";
import { motion } from "framer-motion";
import * as Color from "color";
import Card_1 from "../components/Card_1";
import Card_2 from "../components/Card_2";

export default function LoungeTheme1() {
  const { theme } = useContext(AppContext);

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

      <main className="h-full relative text-center">
        <motion.div
          className="px-12 lg:px-80 h-[480px]"
          style={{
            backgroundColor: theme.primary,
          }}
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={header}
        >
          <div className="h-full flex items-end justify-center py-14">
            <div>
              <h1 className="text-2xl text-white mb-6 opacity-50">Lounge</h1>
              <h2 className="text-5xl text-white leading-normal">
                One-of-a-kind NFT collection.
              </h2>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="py-20"
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={content}
        >
          <div className="px-12 mx-auto max-w-[1000px]">
            <div className="h-96 border w-full border-black" />

            <div
              className="py-72"
              style={{
                color: theme.primary,
              }}
            >
              <h3 className="text-5xl leading-normal">
                Tokenized Real Estate/Asset Platform
              </h3>
              <p className="text-2xl mt-6 opacity-50 mx-auto max-w-xl">
                Real Estate investments are currently illiquid, the involvement
                of middlemen and lengthy and complex processes result in
                expensive lending for issuers.
              </p>
              <div className="grid lg:grid-cols-2 gap-12 mt-24">
                <Card_1 />
                <Card_1 />
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundColor: Color(theme.secondary).darken(0.8),
            }}
            className="py-28"
          >
            <div className="mx-auto max-w-5xl">
              <p className="text-2xl opacity-50 mx-auto max-w-xl text-white">
                Benefits for holders
              </p>
              <h3 className="text-4xl lg:text-4xl text-white mt-8 mb-20">
                Benefits as a FineTurtle holder in our Tokenized Real
                Estate/Asset Platform
              </h3>
              <div className="relative lg:flex items-center justify-between">
                <div className="grid grid-cols-2 gap-4">
                  <div
                    style={{
                      backgroundColor: theme.secondary,
                    }}
                    className="bg-white text-white rounded-3xl p-4 shadow-lg h-36 w-36 flex items-center justify-center text-xs hover:scale-110 transition-all"
                  >
                    <div>
                      <div>Dividends</div>
                      <div className="text-4xl">+</div>
                    </div>
                  </div>
                  <div
                    style={{
                      backgroundColor: theme.secondary,
                    }}
                    className="bg-white text-white rounded-3xl p-4 shadow-lg h-36 w-36 flex items-center justify-center text-xs hover:scale-110 transition-all"
                  >
                    <div>
                      <div>Discounts</div>
                      <div className="text-4xl">+</div>
                    </div>
                  </div>
                  <div
                    style={{
                      backgroundColor: theme.secondary,
                    }}
                    className="bg-white text-white rounded-3xl p-4 shadow-lg h-36 w-36 flex items-center justify-center text-xs hover:scale-110 transition-all"
                  >
                    <div>
                      <div>Commissions</div>
                      <div className="text-4xl">+</div>
                    </div>
                  </div>
                  <div
                    style={{
                      backgroundColor: theme.secondary,
                    }}
                    className="bg-white text-white rounded-3xl p-4 shadow-lg h-36 w-36 flex items-center justify-center text-xs hover:scale-110 transition-all"
                  >
                    <div>
                      <div>Priority service</div>
                      <div className="text-4xl">+</div>
                    </div>
                  </div>
                </div>

                <div className="">
                  <div className="text-left border-l-2 text-white max-w-xl pl-4 py-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam vel felis dictum diam vestibulum vehicula eu.
                  </div>
                  {/* <div>
                    <img src="img/holders-2x.png" width="600" />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center pt-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <g clipPath="url(#clip0_15_244)">
                <path
                  d="M15.8885 30C13.3366 30 10.673 29.2547 8.05348 27.7925C5.2507 26.2281 3.06203 24.1638 2.03936 22.8711C-0.0900486 20.1814 -0.593607 15.1882 0.724977 9.84077C2.17765 3.9496 10.7314 0.691919 11.095 0.55608L11.1572 0.53515C11.232 0.512989 12.9949 0 15.4425 0C15.4736 0 15.5047 0 15.5358 0C18.8678 0.0176468 21.8652 0.997661 24.2039 2.83334C29.0928 6.67091 30.8217 11.5209 29.6443 18.0974C29.079 21.257 28.1202 23.5569 26.6267 25.3351C24.8126 27.4958 22.1737 28.9289 18.5601 29.7156C17.6884 29.9056 16.7951 29.9996 15.8881 29.9996L15.8885 30ZM11.7209 2.24894C11.1576 2.46809 3.70135 5.45697 2.51644 10.2618C1.09109 16.0418 2.15411 20.0743 3.49707 21.7712C4.23728 22.7065 6.22251 24.6982 8.96771 26.2306C12.158 28.0117 15.25 28.5936 18.1587 27.9599C24.9374 26.4838 26.9268 22.826 27.8285 17.788C28.8923 11.8451 27.4182 7.66528 23.0484 4.23565C21.0229 2.64579 18.5109 1.82624 15.5829 1.79998C13.5216 1.78151 11.9575 2.18451 11.7205 2.24894H11.7209Z"
                  fill="black"
                />
                <path
                  d="M15.5309 3.52524C15.5309 3.52524 13.1531 4.39568 13.3313 5.4984C13.5095 6.60112 14.4015 7.29756 15.3523 7.23969C16.3035 7.18183 16.9571 6.13697 17.0168 5.20826C17.0761 4.27954 16.0656 3.29296 15.5305 3.52524H15.5309Z"
                  fill="black"
                />
                <path
                  d="M5.72237 11.0125C5.72237 11.0125 2.39333 15.4234 3.52277 16.3521C4.6522 17.2808 8.15946 13.7403 9.11067 12.6376C10.0619 11.5349 11.1316 9.03931 10.2994 8.40074C9.46712 7.76217 7.26751 8.63302 5.72195 11.0125H5.72237Z"
                  fill="black"
                />
                <path
                  d="M14.3586 9.94384C14.3586 9.94384 12.2019 10.6641 12.4991 12.8695C12.7962 15.075 14.7579 14.9588 15.5309 14.7848C16.3039 14.6108 17.5519 13.9144 17.1358 11.8829C16.7196 9.8515 14.8512 9.68775 14.3586 9.94384V9.94384Z"
                  fill="black"
                />
                <path
                  d="M9.22967 17.8032C9.22967 17.8032 6.61393 20.357 8.99176 22.6786C11.3696 25.0002 12.7369 25.0581 14.8176 23.0849C16.8982 21.1117 13.8664 14.669 9.22967 17.8032V17.8032Z"
                  fill="black"
                />
                <path
                  d="M18.3841 19.196C18.3841 19.196 17.9087 24.6518 20.4647 25.0581C23.0208 25.4643 23.2292 19.3688 23.2587 19.0799C23.3776 17.9193 22.1885 13.8564 19.8704 16.1197C18.4324 17.5237 18.3841 19.1956 18.3841 19.1956V19.196Z"
                  fill="black"
                />
                <path
                  d="M20.2268 7.3559C20.2268 7.3559 18.7405 8.74876 19.7514 10.7223C20.7619 12.6955 24.1502 15.0171 25.9934 14.3206C27.8361 13.6242 24.745 10.7802 24.3289 9.79362C23.9127 8.80704 21.8321 5.67288 20.2272 7.3559H20.2268Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_15_244">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <div className="text-xs text-slate-400">
              <div className="my-8 underline hover:no-underline">
                <a href="https://fineturtle.gitbook.io/fineturtle/">
                  Whitepaper
                </a>
              </div>
              <div>© 2022, Fine Tutle.</div>
              <div>We are hella fine.</div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
