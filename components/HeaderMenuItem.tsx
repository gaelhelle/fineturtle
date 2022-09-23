import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../providers/AppProvier";

const HeaderMenuItem = ({ children, onClick, ...props }) => {
  const { theme } = useContext(AppContext);
  const router = useRouter();

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset > 440 ? 400 : 0;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`headerMenuItem-${
        theme.name
      } headerMenuItem-${router.route.substring(1)}  ${
        scrollPosition && "headerMenuItem-scrolled"
      } text-2xs rounded px-6 py-2 transition-all uppercase font-medium ${
        !onClick && "cursor-not-allowed"
      }`}
      onClick={onClick}
      {...props}
      style={{}}
    >
      {children}
    </div>
  );
};

export default HeaderMenuItem;
