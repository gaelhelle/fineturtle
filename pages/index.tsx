import Head from "next/head";
import { useContext } from "react";
import { AppContext } from "../providers/AppProvier";
import Theme1Index from "./theme1";
import Theme2Index from "./theme2";

export default function Home() {
  const { theme, setShowSettingsModal } = useContext(AppContext);

  let render = <Theme1Index />;

  switch (theme.name) {
    case "theme2_palette_1": {
      render = <Theme2Index />;
    }
    case "theme2_palette_2": {
      render = <Theme2Index />;
    }
  }

  return (
    <div
      className={` ${
        theme.name === "theme1_palette_1" || theme.name === "theme1_palette_2"
          ? "border-b-8 h-screen"
          : ""
      }`}
      style={{
        borderColor: theme.primary,
      }}
    >
      <Head>
        <title>FineTurtle | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-full">{render}</main>
    </div>
  );
}
