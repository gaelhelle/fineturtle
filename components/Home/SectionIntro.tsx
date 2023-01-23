import SectionContainer from "../HOC/SectionInner";
import TitleText from "../TitleText";
import SectionRotatedText from "../SectionRotatedText";

const SectionIntro = () => {
  return (
    <SectionContainer name="intro">
      <SectionRotatedText value="FineTurtle NFTs" />
      <div className="text-content flex flex-col lg:flex-row items-center gap-10">
        <div className="max-w-2xl">
          <div className="max-w-lg relative">
            <TitleText
              value="The Closer We Get, the Finer We Become"
              behind="Finer"
            />
          </div>
          <p>
            Are you a lover of the finer things in life? Then you are just where
            you need to be! Here at FineTurtle, you will become part of a larger
            clan of other passionate fine livers. Together, we will explore,
            discover, and conquer new frontiers together in the most inspiring
            journey ever!
          </p>
          <p>
            We will break down barriers, take over the world, and make it finer
            than it's ever been before. We will do this with the help of the
            8,888 diverse FineTurtle in our legion, which will lead the
            revolution to establish a new Web 3.0 order.
          </p>
          <p>
            In this new order, we will expand our wealth and own real estate in
            Web 3.0 by tokenizing it.. You will enjoy rewards, real estate
            tokens, real-life events, and exclusive merch, and incredible
            collectibles to be discovered once we get rolling.
          </p>
          <p>
            So come on! Join us and let us take this to the next level!
            Remember, the closer we get, the finer we become!
          </p>
        </div>
        <div className="flex flex-col gap-6 lg:pl-32"></div>
      </div>
    </SectionContainer>
  );
};

export default SectionIntro;
