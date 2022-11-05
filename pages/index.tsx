import Head from "next/head";
import HeaderNav from "../components/Header/Header";
import HomePage from "./home";

export default function Home() {
  return (
    <div>
      <Head>
        <title>FineTurtle | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderNav />

      <main className="h-full">
        <HomePage />
      </main>
    </div>
  );
}
