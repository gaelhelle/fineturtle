import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import Footer from "../../components/Footer";
import HeaderNav from "../../components/Header/Header";
import PageContainer from "../../components/HOC/PageContainer";
import SectionContainer from "../../components/HOC/SectionInner";
import SectionRotatedText from "../../components/SectionRotatedText";
import TitleText from "../../components/TitleText";

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
            <div className="md:absolute w-full h-full md:scale-110 2xl:scale-150 grid grid-cols-2 md:block">
              <FinemapBlockDiv
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
        <div
          id="modal-overlay"
          className="fixed top-0 left-0 w-full h-full bg-white/90 transition duration-500 z-30 px-12 md:px-[130px] py-36 overflow-y-auto"
        >
          <div className="p-12  relative overflow-hidden bg-[#EBE6E3]">
            <div className="uppercase font-thunder-bold text-4xl mb-8">
              title
            </div>
            <div className="relative h-full">
              {showOverlay === 1 && (
                <>
                  <div className="h-full flex flex-col lg:flex-row gap-20">
                    <div className="max-w-2xl">
                      <p className="mb-4">
                        FineTurtle is not an NFT project that is here to fit the
                        mold and offer holders “plastic, imagined” benefits.
                        Instead, we will usher you into the next frontier of NFT
                        that have real-life benefits for users.
                      </p>
                      <p className="mb-4">
                        Our mission is to efficiently combine the worlds of NFT
                        and real estate into one seamless ecosystem where
                        operations are expedited and where there is increased
                        liquidity and easier capital formation.
                      </p>
                      <p>
                        Succinctly put, FineTurtle is here to solve the
                        challenges of the conventional real estate industry by
                        leveraging the advantages of NFTs and other
                        decentralized systems. Therefore, you no longer need to
                        worry about a hype NFT project. FineTurtle is the real
                        deal!
                      </p>
                    </div>
                    <div className="w-full">
                      <div className="bg-gray-500/20 w-full h-full"></div>
                    </div>
                  </div>
                </>
              )}
              {showOverlay === 2 && (
                <>
                  <div className="h-full  flex flex-col lg:flex-row gap-20">
                    <div className="max-w-2xl">
                      <p className="mb-4">
                        As FineTurtle, we are keen on building a cohesive NFT
                        community for specific reasons. Firstly, we want to
                        galvanize everyone that believes in the significance of
                        NFTs beyond mere artwork and merchandise.
                      </p>
                      <p className="mb-4">
                        We want to unite all progressives that see NFTs as an
                        innovation that will completely revolutionize how real
                        estate operates. We will then enable them to benefit
                        from rewards and passive income that will be generated
                        from tokenized real estate.
                      </p>
                      <p>
                        Secondly, building a strong NFT community will go a long
                        way in spreading awareness of our project. This will
                        then help to fast-track progress globally towards the
                        adoption of tokenized real estate as a valid revenue and
                        operational model for individuals and businesses in both
                        these worlds.
                      </p>
                    </div>
                    <div className="w-full">
                      <div className="bg-gray-500/20 w-full h-full"></div>
                    </div>
                  </div>
                </>
              )}
              {showOverlay === 3 && (
                <>
                  <div className="h-full  flex flex-col lg:flex-row gap-20">
                    <div className="max-w-2xl">
                      <p className="mb-4">
                        Fine Turtle will indeed bridge the divide between NFTs
                        and real-world properties by tokenizing real estate.
                        However, properties will not be the only physical assets
                        associated with the FineTurtle brand.
                      </p>
                      <p className="mb-4">
                        <strong>Real Life Events</strong>
                        <br />
                        Members of the FineTurtle community will have a lot of
                        opportunities to interact in real life. That is because
                        we will organize meet-ups, exhibits, festivals, and
                        other exciting linkups. That way, we will keep the
                        project’s spirit alive and ensure it continues to grow.
                      </p>
                      <p>
                        <strong>Exclusive Merchandise</strong>
                        <br />
                        We will produce various merchandise for fans of our NFT
                        project. As such, FineTurtle holders will enjoy high
                        quality items including bracelets, posters, and other
                        unique collectibles. All holders can claim their
                        complimentary welcome pack through our token-gated shop.
                      </p>
                    </div>
                    <div className="w-full">
                      <div className="bg-gray-500/20 w-full h-full"></div>
                    </div>
                  </div>
                </>
              )}
              {showOverlay === 4 && (
                <>
                  <div className="h-full  flex flex-col lg:flex-row gap-20">
                    <div className="max-w-2xl">
                      <p className="mb-4">
                        With Web 3.0 promising to be the foundation of all
                        internet-related innovations from now going forward, it
                        is vital for the real estate industry to be part of the
                        Web 3.0 movement. And the role of FineTurtle NFTs? To
                        facilitate this transition in the most efficient way
                        possible.
                      </p>
                      <p>
                        Therefore, our NFT project will unite Blockchain and NFT
                        enthusiasts with real estate players in one ecosystem in
                        which all parties will benefit immensely. Tokenized real
                        estate is a goldmine and FineTurtle is the machinery
                        that will help everyone mine that gold.
                      </p>
                    </div>
                    <div className="w-full">
                      <div className="bg-gray-500/20 w-full h-full"></div>
                    </div>
                  </div>
                </>
              )}
              {showOverlay === 5 && (
                <>
                  <div className="h-full  flex flex-col lg:flex-row gap-20">
                    <div className="max-w-2xl">
                      <p className="mb-4">
                        We have earlier made it clear that the community will be
                        the basic foundation upon and around which our NFT
                        project will be built. And what better way of doing that
                        than by using decentralized autonomous organizations?
                      </p>
                      <p className="mb-4">
                        The Fine DAO will act as the Fine Parliament where
                        holders will be able to discuss the running of the
                        project, exchange ideas, and directly influence decision
                        making. This will increase the participation,
                        inclusivity, and innovation required to push the project
                        further.
                      </p>
                      <p>
                        Holders will be able to vote on important matters that
                        affect the project and suggest new ways of doing things.
                      </p>
                    </div>
                    <div className="w-full">
                      <div className="bg-gray-500/20 w-full h-full"></div>
                    </div>
                  </div>
                </>
              )}
            </div>
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
      )}

      <Footer />
    </div>
  );
}

const FinemapBlockDiv = (props) => {
  const { title, x, y, width, height, setHoverItem, description, onClick } =
    props;

  return (
    <div
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: `${width}%`,
        height: `${height}%`,
      }}
      className="md:absolute p-4 group z-10 bg-[#EBE6E3] md:bg-transparent"
      onMouseOver={() => setHoverItem(1)}
      onMouseOut={() => setHoverItem(null)}
      onClick={onClick}
    >
      <div className="relative h-full w-full px-3 py-1.5">
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
