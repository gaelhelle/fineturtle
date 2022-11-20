import Head from "next/head";
import Footer from "../../components/Footer";
import HeaderNav from "../../components/Header/Header";
import PageContainer from "../../components/HOC/PageContainer";
import SectionContainer from "../../components/HOC/SectionInner";
import HomePage from "../home";

export default function Home() {
  return (
    <div>
      <Head>
        <title>FineTurtle | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderNav />

      <PageContainer>
        <SectionContainer name="manifesto">
          <div className="max-w-[600px] ">
            <h1 className="title-page text-7xl uppercase mb-6">
              Making the world a finer place, one NFT at a time
            </h1>
            <div className="text-sm text-content">
              <p>
                For a long time, many NFT projects have been purely built upon
                speculation. In many cases, these NFTs have done little to
                actually improve the lives of holders in terms of giving them
                real, tangible value. However, FineTurtle is here to change all
                that.
              </p>
              <p>
                As a progressive collective that wants to make the world a
                better place, our dream is to offer our holders an NFT that will
                give them practical utility. That is the primary reason why Fine
                Turtle will lead the charge in tokenizing real estate.
              </p>
              <br />
              <br />
              <br />
              <p>
                We will ensure that by holding FineTurtle, people stand a prime
                chance to acquire fractional ownership stakes in real estate
                properties. That way, we will increase socio-economic
                inclusivity in real estate ownership as people without large
                capital outlays will be able to own properties.
              </p>
              <p>
                This will democratize access to opportunities for earning
                passive income that were hitherto not accessible by many people.
                Additionally, we will strive to leverage the unique capabilities
                of NFT technology to transform the processes of home ownership
                and regulation compliance.
              </p>
              <p>
                This is because we will eliminate reliance on government
                registries to document home ownership rights. Instead, we will
                rely on the immutability of the Blockchain to record and provide
                proof of asset ownership for higher privacy, efficiency, and
                easier access to liquidity.
              </p>
            </div>
          </div>
        </SectionContainer>

        <Footer />
      </PageContainer>
    </div>
  );
}
