import Image from "next/image";
import HeaderMenuItem from "./HeaderMenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faGear, faPause } from "@fortawesome/free-solid-svg-icons";
import {
  faChessKing,
  faCircleXmark,
} from "@fortawesome/free-regular-svg-icons";
import { useContext, useState } from "react";
import { AppContext } from "../providers/AppProvier";
import Link from "next/link";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import { theme1_palette_1 } from "../variants";

const HeaderNav = () => {
  const { theme } = useContext(AppContext);
  const [showMenuMobile, setShowMenuMobile] = useState(false);

  const variants = {
    initial: { opacity: 0, x: 100 },
    enter: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
    },
  };

  const toggleMenuMobile = () => {
    setShowMenuMobile((state) => !state);
  };

  return (
    <div className="fixed px-8 lg:px-32 mt-8 flex items-center justify-between w-full z-10">
      <Link href="/" className="z-50 fixed">
        <Image
          src={`/img/themes/${theme.name}/logo.svg`}
          width="121"
          height="34"
        />
      </Link>

      <div className="items-center space-x-4 hidden lg:flex">
        <Link href="/lounge">
          <HeaderMenuItem>Lounge</HeaderMenuItem>
        </Link>

        <HeaderMenuItem>Manifesto</HeaderMenuItem>
        <HeaderMenuItem>FineMap</HeaderMenuItem>
        <HeaderMenuItem>FAQ</HeaderMenuItem>

        <HeaderMenuItem>
          <FontAwesomeIcon icon={faTwitter} width="14" />
        </HeaderMenuItem>
        <HeaderMenuItem>
          <FontAwesomeIcon icon={faDiscord} width="14" />
        </HeaderMenuItem>
      </div>

      <div className="lg:hidden">
        <div className="p-2 hover:opacity-50" onClick={toggleMenuMobile}>
          <div className="rounded-full bg-black h-[3px] w-4 mb-2" />
          <div className="rounded-full bg-black h-[3px] w-7" />
        </div>
      </div>

      <AnimatePresence>
        {showMenuMobile && (
          <motion.div
            animate="enter"
            exit="exit"
            initial="initial"
            variants={variants}
            transition={{ ease: [0.87, 0, 0.13, 1] }}
            className="fixed top-0 left-0 right-0 h-full bg-white/60 backdrop-blur-xl px-8 py-6"
          >
            <div className="flex justify-end">
              <div onClick={toggleMenuMobile}>
                <div className="h-12 w-12 flex items-center justify-center">
                  <div className="rounded-full bg-black h-[3px] w-7 rotate-45 absolute" />
                  <div className="rounded-full bg-black h-[3px] w-7 -rotate-45 absolute" />
                </div>
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold uppercase">
                <motion.div
                  initial="hidden"
                  animate="show"
                  variants={container}
                  transition={{ staggerChildren: 0.12 }}
                >
                  <MobileLink title="Lounge" />
                  <MobileLink title="Manifesto" />
                  <MobileLink title="Finemap" />
                  <MobileLink title="FAQ" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MobileLink = (props) => {
  const { title } = props;

  const item = {
    hidden: { opacity: 0, x: 10 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <Link href={`/${title.toLowerCase()}`}>
      <motion.div
        variants={item}
        className="border-b last:border-0 border-black/10 py-5"
      >
        <div>{title}</div>
      </motion.div>
    </Link>
  );
};

export default HeaderNav;
