import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../providers/AppProvier";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

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
    <div className="px-8 lg:px-32 mt-8 flex items-center justify-between w-full border-b border-black/5 pb-8 relative z-50">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src={`/img/themes/${theme.name}/logo.svg`}
            width="121"
            height="34"
          />
        </Link>

        <div className="items-center space-x-4 hidden lg:flex border-l border-black/10 py-1 ml-6 pl-6">
          <Link href="/lounge">
            <HeaderMenuItem title="Lounge " />
          </Link>
          <HeaderMenuItem title="Manifesto " />
          <HeaderMenuItem title="FineMap " />
          <HeaderMenuItem title="FAQ " />
        </div>
      </div>
      <div className="flex items-center">
        <HeaderMenuSocialItem>
          <FontAwesomeIcon icon={faTwitter} width="14" />
        </HeaderMenuSocialItem>
        <HeaderMenuSocialItem>
          <FontAwesomeIcon icon={faDiscord} width="14" />
        </HeaderMenuSocialItem>
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

const HeaderMenuItem = ({ children, title, onClick, ...props }: any) => {
  const { theme } = useContext(AppContext);
  const router = useRouter();

  const routeName = router.route.toLowerCase().substring(1);

  return (
    <div
      className={`headerMenuItem-${
        theme.name
      } headerMenuItem-${routeName} cursor-pointer text-xs rounded px-2 py-1 transition-all font-medium hover:opacity-100 ${
        !onClick && "cursor-not-allowed"
      } ${
        routeName === title?.toLowerCase().replace(/\s/g, "")
          ? "bg-[#202fd7] text-white"
          : "opacity-40 "
      }
      `}
      onClick={onClick}
      {...props}
      style={{}}
    >
      {title}
    </div>
  );
};

const HeaderMenuSocialItem = ({ children }) => {
  const { theme } = useContext(AppContext);
  const router = useRouter();

  const routeName = router.route.toLowerCase().substring(1);

  return (
    <div
      className={`headerMenuItem-${theme.name} headerMenuItem-${routeName} bg-blue-50 text-[#202FD7] h-6 flex items-center cursor-pointer text-xs rounded px-3 mx-2 transition-all font-medium  hover:opacity-100
      `}
    >
      {children}
    </div>
  );
};
