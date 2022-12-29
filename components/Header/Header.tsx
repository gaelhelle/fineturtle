import Image from "next/image";
import HeaderMenuItem from "./MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { socials } from "../../variants";

const HeaderNav = () => {
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
    <header className="fixed px-8 lg:px-32 mt-8 flex items-center justify-between w-full z-20">
      <Link href="/" className="z-50 fixed">
        <Image src="/img/icon-logo.svg" width="30" height="30" />
      </Link>

      <div className="items-center space-x-4 hidden lg:flex">
        <HeaderMenuItem page="/lounge">Lounge</HeaderMenuItem>
        <HeaderMenuItem page="/manifesto">Manifesto</HeaderMenuItem>
        <HeaderMenuItem page="/finemap">FineMap</HeaderMenuItem>
        <HeaderMenuItem page="/faq">FAQ</HeaderMenuItem>

        {socials.map((social) => (
          <HeaderMenuItem key={social.name} page={social.url} externalUrl>
            <FontAwesomeIcon icon={social.icon} width="14" />
          </HeaderMenuItem>
        ))}
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
            className="fixed z-[100] top-0 left-0 right-0 h-full bg-white/60 backdrop-blur-xl"
          >
            <div className="flex justify-between items-center  px-8 py-6 shadow-md">
              <div>
                <Link href="/">
                  <Image src="/img/full-logo.svg" width="160" height="40" />
                </Link>
              </div>
              <div onClick={toggleMenuMobile}>
                <div className="h-12 w-12 flex items-center justify-center">
                  <div className="rounded-full bg-black h-[2.5px] w-6 rotate-45 absolute" />
                  <div className="rounded-full bg-black h-[2.5px] w-6 -rotate-45 absolute" />
                </div>
              </div>
            </div>
            <div>
              <div className="text-2xl font-polysans-bulky  px-8">
                <motion.div
                  initial="hidden"
                  animate="show"
                  variants={container}
                  transition={{ staggerChildren: 0.12 }}
                >
                  <MobileLink page="/lounge" title="Lounge" />
                  <MobileLink page="/manifesto" title="Manifesto" />
                  <MobileLink page="/finemap" title="Finemap" />
                  <MobileLink page="/faq" title="FAQ" />

                  <div className="grid grid-cols-2 gap-4 mt-12 justify-center ">
                    {socials.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        className="rounded bg-black/5 flex justify-center items-center p-3"
                      >
                        <FontAwesomeIcon icon={social.icon} width="22" />
                      </a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const MobileLink = (props) => {
  const { title, page } = props;
  const router = useRouter();

  const item = {
    hidden: { opacity: 0, x: 10 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <motion.div variants={item} className="mt-8">
      <Link href={page}>
        <div
          className={`border  border-black/10 py-4 px-6 ${
            router.pathname === page ? "bg-black text-white" : "inline-block"
          }`}
        >
          <span>{title}</span>
        </div>
      </Link>
    </motion.div>
  );
};

export default HeaderNav;
