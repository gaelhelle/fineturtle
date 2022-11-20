import SectionContainer from "../HOC/SectionInner";

const SectionTeam = () => {
  return (
    <SectionContainer
      name="the-team"
      className="bg-[color:var(--theme-primary)]"
    >
      <h2 className="title-page black-dot text-6xl lg:text-7xl uppercase mb-6">
        The dream team
      </h2>
      <div className="max-w-4xl">
        <p className="mb-4">
          For the FineTurtle legion to win, all hands are needed on deck.
        </p>
        <p>
          To achieve this, FineTurtle has a group of fine experts with
          experience in graphic design, tech, NFTs and other relevant
          disciplines. This dream team is what will make the dream real.
        </p>
      </div>
    </SectionContainer>
  );
};

export default SectionTeam;
