import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import Footer from "../../components/Footer";
import HeaderNav from "../../components/Header/Header";
import PageContainer from "../../components/HOC/PageContainer";
import SectionContainer from "../../components/HOC/SectionInner";
import finemapData from "../../components/Modal/data";
import SectionRotatedText from "../../components/SectionRotatedText";
import TitleText from "../../components/TitleText";
import FinemapModal from "../../components/Modal/modal";

export default function Home() {
  const [showOverlay, setShowOverlay] = useState(null);
  const [hoverItem, setHoverItem] = useState(null);

  return (
    <div>
      <Head>
        <title>FineTurtle | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderNav />

      <PageContainer>
        <SectionContainer name="finemap">
          <SectionRotatedText value="Finemap" />
          <TitleText value="Our plan is only the beggining" behind="Vision" />
          <div className="max-w-[500px] mb-32">
            <p>
              As humans, we are not moving away from the real world and
              permanently migrating to Web 3.0. Rather, we are simply combining
              these two realms to have a better.
            </p>
          </div>
          <div
            className="relative md:aspect-[16/9] 2xl:top-16 2xl:mb-16"
            id="finemap-container"
          >
            <div className="md:absolute w-full h-full md:scale-110 2xl:scale-150 grid grid-cols-2 md:block gap-8 md:gap-0">
              {finemapData.map((item) => (
                <FinemapBlockDiv
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  description={item.summary}
                  position={item.position}
                  setHoverItem={setHoverItem}
                  onClick={() => setShowOverlay(item.id)}
                />
              ))}
              <img
                id="finemap-image-desktop"
                src="/img/finemap/finemap-turtle-desktop-2.svg"
                className="absolute w-full h-full top-0 left-0 right-0 bottom-0 transition hidden md:block opacity-50"
              />
              <img
                src="/img/finemap/finemap-turtle-desktop-2.svg"
                className="absolute w-full h-full left-0 right-0 bottom-0 transition  md:hidden opacity-30 rotate-90 scale-[2] top-32"
              />
            </div>
          </div>
        </SectionContainer>
      </PageContainer>

      {showOverlay && (
        <FinemapModal
          isOpen={showOverlay}
          id={showOverlay}
          handleClose={() => setShowOverlay(false)}
        />
      )}

      <Footer />
    </div>
  );
}

const FinemapBlockDiv = (props) => {
  const { title, position, setHoverItem, description, onClick, id } = props;

  const { x, y, width, height } = position;

  return (
    <div
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: `${width}%`,
        height: `${height}%`,
      }}
      id={`finemapblock-div-${id}`}
      className="finemapblock-div md:absolute group bg-[#EBE6E3]/80 md:bg-transparent"
      onMouseOver={() => setHoverItem(id)}
      onMouseOut={() => setHoverItem(null)}
      onClick={onClick}
    >
      <div className="relative h-full w-full px-3 py-1.5">
        <div className="text-center relative z-10 h-full">
          <div className="inline-block mx-auto my-2 px-2 md:px-12 text-xs font-extrabold group-hover:bg-transparent uppercase z-30 relative">
            {title}
          </div>
          <div className="text-2xs group-hover:opacity-100 opacity-0 p-4 scale-110 group-hover:scale-100 transition h-full">
            <div className=" max-w-sm m-auto">{description}</div>
          </div>
        </div>
        <div className="group-hover:bg-[color:var(--theme-primary)] scale-110 group-hover:scale-100 transition absolute left-0 top-0 h-full w-full" />
      </div>
    </div>
  );
};
