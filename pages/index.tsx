import Head from "next/head";
import { useContext } from "react";
import { AppContext } from "../providers/AppProvier";
import Theme1Index from "./theme1";

export default function Home() {
  const { theme, setShowSettingsModal } = useContext(AppContext);

  return (
    <div>
      <Head>
        <title>FineTurtle | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-full">
        <Theme1Index />
      </main>
    </div>
  );
}
