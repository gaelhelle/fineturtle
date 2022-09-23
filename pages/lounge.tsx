import Head from "next/head";
import { useContext } from "react";
import HeaderNav from "../components/HeaderNav";
import { AppContext } from "../providers/AppProvier";
import { motion } from "framer-motion";
import * as Color from "color";
import Card_1 from "../components/Card_1";
import Card_2 from "../components/Card_2";
import LoungeTheme1 from "./loungeTheme1";
import LoungeTheme2 from "./loungeTheme2";

export default function Lounge() {
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

  if (theme.name === "theme1_palette_1" || theme.name === "theme1_palette_2") {
    return <LoungeTheme1 />;
  }

  return <LoungeTheme2 />;
}
