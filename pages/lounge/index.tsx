import Head from "next/head";
import Footer from "../../components/Footer";
import HeaderNav from "../../components/Header/Header";
import PageContainer from "../../components/HOC/PageContainer";
import SectionCommunity from "../../components/Home/SectionCommunity";
import SectionIntro from "../../components/Home/SectionIntro";
import SectionTeam from "../../components/Home/SectionTeam";

export default function Home() {
  return (
    <div>
      <Head>
        <title>FineTurtle | Lounge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderNav />

      <PageContainer>
        <SectionIntro />
        <SectionTeam />
        <SectionCommunity />
        {/* <SectionMemberPass /> */}
      </PageContainer>

      <Footer />
    </div>
  );
}
