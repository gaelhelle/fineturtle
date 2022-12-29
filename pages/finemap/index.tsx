import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import Footer from "../../components/Footer";
import HeaderNav from "../../components/Header/Header";
import PageContainer from "../../components/HOC/PageContainer";
import SectionContainer from "../../components/HOC/SectionInner";
import SectionRotatedText from "../../components/SectionRotatedText";
import TitleText from "../../components/TitleText";
import FinemapModal from "./modal";

export default function Home() {
  const [showOverlay, setShowOverlay] = useState(null);
  const [hoverItem, setHoverItem] = useState(null);

  useEffect(() => {
    document.body.style.overflow = showOverlay ? "hidden" : null;
  }, [showOverlay]);

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
              <FinemapBlockDiv
                id="01"
                title="Mission & Utility"
                description="FineTurtle is not an NFT project that is here to fit the mold and offer holders “plastic, imagined” benefits. "
                x={4.9}
                y={16.5}
                width={23.2}
                height={32.9}
                setHoverItem={setHoverItem}
                onClick={() => setShowOverlay(1)}
              />
              <FinemapBlockDiv
                id="02"
                title="Community"
                description="As FineTurtle, we are keen on building a cohesive NFT community for specific reasons."
                x={28.1}
                y={16.5}
                width={22}
                height={32.9}
                setHoverItem={setHoverItem}
                onClick={() => setShowOverlay(2)}
              />
              <FinemapBlockDiv
                id="03"
                title="Physical World"
                description="FineTurtle will indeed bridge the divide between NFTs and real-world properties by tokenizing real estate."
                x={50.1}
                y={16.5}
                width={45.1}
                height={32.9}
                setHoverItem={setHoverItem}
                onClick={() => setShowOverlay(3)}
              />
              <FinemapBlockDiv
                id="04"
                title="Connecting Real Estate and Web 3.0"
                description="With Web 3.0 promising to be the foundation of all internet-related innovations from now going forward."
                x={4.9}
                y={49.4}
                width={23.2}
                height={35}
                setHoverItem={setHoverItem}
                onClick={() => setShowOverlay(4)}
              />
              <FinemapBlockDiv
                id="05"
                title="Fine DAO"
                description="We have earlier made it clear that the community will be the basic foundation upon and around which our NFT project will be built."
                x={28.1}
                y={49.4}
                width={22}
                height={35}
                setHoverItem={setHoverItem}
                onClick={() => setShowOverlay(5)}
              />
              <FinemapBlockDiv
                id="06"
                title="Share your Ideas"
                x={50.1}
                y={49.4}
                width={45.1}
                height={35}
                setHoverItem={setHoverItem}
              />
              <img
                src="/img/finemap/finemap-turtle-desktop-2.svg"
                className="absolute w-full h-full top-0 left-0 right-0 bottom-0 transition hidden md:block"
                style={{
                  opacity: hoverItem ? "40%" : "100%",
                }}
              />
            </div>
          </div>
        </SectionContainer>
      </PageContainer>

      {showOverlay && (
        <FinemapModal
          id={showOverlay}
          handleClose={() => setShowOverlay(false)}
        />
      )}

      <Footer />
    </div>
  );
}

const FinemapBlockDiv = (props) => {
  const { title, x, y, width, height, setHoverItem, description, onClick, id } =
    props;

  return (
    <div
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: `${width}%`,
        height: `${height}%`,
      }}
      className="finemapblock-div md:absolute p-4 group z-10 bg-[#EBE6E3] md:bg-transparent"
      onMouseOver={() => setHoverItem(1)}
      onMouseOut={() => setHoverItem(null)}
      onClick={onClick}
    >
      <div className="relative h-full w-full px-3 py-1.5">
        <div className="absolute -bottom-8 -left-10 md:left-0 md:bottom-0">
          <div className="text-stroke text-9xl md:text-xs">{id}</div>
        </div>
        <div className="text-center relative z-10 h-full">
          <div className="bg-[color:var(--theme-text)] text-white p-2 inline-block mx-auto my-2 px-12 text-3xs font-bold group-hover:bg-transparent group-hover:text-black">
            {title}
          </div>
          <div className="text-3xs group-hover:opacity-100 opacity-0 p-4 scale-110 group-hover:scale-100 transition h-full">
            <div className="">{description}</div>
            <div className="rounded-full border px-4 py-1.5 mt-6 inline-block hover:bg-[color:var(--theme-primary)] hover:border-[color:var(--theme-primary)] ">
              Read More
            </div>
          </div>
        </div>
        <div className="group-hover:bg-white/95 scale-110 group-hover:scale-100 transition absolute left-0 top-0 h-full w-full" />
      </div>
    </div>
  );
};

const FinemapBlock = (props) => {
  const {
    title,
    id,
    description,
    className,
    showOverlay,
    setShowOverlay,
    children,
  } = props;

  const defaultDiv = useRef<HTMLDivElement>();

  const [open, setOpen] = useState(false);
  const [containerDiv, setContainerDiv] = useState<HTMLElement>();

  useEffect(() => {
    const containerEl = document.getElementById("finemap-container");
    setContainerDiv(containerEl);
  }, [open]);

  useEffect(() => {
    if (!showOverlay) {
      setOpen(false);
    }
  }, [showOverlay]);

  const divTop = defaultDiv?.current?.offsetTop;
  const divLeft = defaultDiv?.current?.getBoundingClientRect()?.x;
  const divWidth = defaultDiv?.current?.getBoundingClientRect()?.width;
  const divHeight = defaultDiv?.current?.getBoundingClientRect()?.height;

  const handleClick = () => {
    if (showOverlay) return;
    setOpen((state) => !state);
    setShowOverlay((state) => !state);
  };

  return (
    <div
      ref={defaultDiv}
      className={`group bg-[color:var(--theme-brown-light)] p-12 lg:h-80 flex flex-col ${className} transition hover:bg-white`}
      onClick={handleClick}
    >
      <div className="flex-1 relative">
        <div className="overflow-hidden">
          <div className="translate-y-0 group-hover:-translate-y-10 group-hover:opacity-0 transition duration-300 absolute ">
            <div className="uppercase font-thunder-bold text-4xl">{title}</div>
          </div>
          <div className="translate-y-10 group-hover:translate-y-0 transition duration-300 opacity-0 group-hover:opacity-100">
            <div className="uppercase font-thunder-bold text-4xl">{title}</div>
          </div>
        </div>
        <div className="overflow-hidden mb-10 lg:mb-0">
          <div className="translate-y-full group-hover:translate-y-0 transition duration-300 delay-100 opacity-0 group-hover:opacity-100">
            {description}
          </div>
        </div>
      </div>
      <div className="font-thunder-bold text-5xl group-hover:translate-x-6 relative transition">
        <span className="bg-[color:var(--theme-primary)] h-2 w-0 group-hover:w-10 inline-block align-middle -top-1 relative opacity-0  translate-x-0 group-hover:-translate-x-6 group-hover:opacity-100 transition duration-700" />
        {id}
      </div>
      <div
        className={`finemap-modal bg-[color:var(--theme-brown-light)] opacity-0 h-52 w-52 absolute left-0 lg:top-0 transition-all duration-300 z-40 scale-110 ease-in-out ${
          open ? "block" : "none"
        }`}
        style={
          open
            ? {
                visibility: "visible",
                width: containerDiv.getBoundingClientRect().width,
                height: "auto",
                left: containerDiv.getBoundingClientRect().left,
                top: containerDiv.getBoundingClientRect().top + window.scrollY,
                opacity: 100,
                transform: "scale(1)",
              }
            : { width: divWidth, height: divHeight, top: divTop, left: divLeft }
        }
      >
        <div className="p-12 h-full relative overflow-hidden">
          <div className="uppercase font-thunder-bold text-4xl mb-8">
            {title}
          </div>
          <div className="relative h-full">{children}</div>
          <div
            onClick={() => setShowOverlay(false)}
            className="absolute top-12 right-12"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
