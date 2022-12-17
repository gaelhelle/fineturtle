import SectionContainer from "../HOC/SectionInner";
import { Tab } from "@headlessui/react";
import { Fragment } from "react";
import SectionRotatedText from "../SectionRotatedText";

const SectionCommunity = () => {
  return (
    <SectionContainer name="community-tabs">
      <SectionRotatedText value="Community First" />
      <Tab.Group>
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="max-w-md">
            <h2 className="title-page green-dot text-6xl lg:text-7xl uppercase mb-2">
              Genuine love for people and community at the highest level
            </h2>
          </div>
          <div className="lg:w-52">
            <nav>
              <Tab.List>
                <ul>
                  <Tab as={Fragment}>
                    {({ selected }) => (
                      <li
                        className={`text-4xl uppercase font-thunder-bold mb-10 outline-none ${
                          !selected && "opacity-50"
                        }`}
                      >
                        Together
                      </li>
                    )}
                  </Tab>
                  <Tab as={Fragment}>
                    {({ selected }) => (
                      <li
                        className={`text-4xl uppercase font-thunder-bold mb-10 outline-none ${
                          !selected && "opacity-50"
                        }`}
                      >
                        Integrating technology
                      </li>
                    )}
                  </Tab>
                  <Tab as={Fragment}>
                    {({ selected }) => (
                      <li
                        className={`text-4xl uppercase font-thunder-bold outline-none ${
                          !selected && "opacity-50"
                        }`}
                      >
                        Real community ownership
                      </li>
                    )}
                  </Tab>
                </ul>
              </Tab.List>
            </nav>
          </div>
          <div className="flex-1">
            <ul>
              <li className="">
                <Tab.Panel>
                  <p className="mb-6">
                    We know that while creativity and innovation is what builds
                    a successful NFT project, community is what holds everything
                    together. That is why we have made our community the
                    foundation of FineTurtle NFTs and all our other projects.
                  </p>
                  <p>
                    Also, our love for community is the motivation behind all
                    our rewards and perks for our NFT holders. By building a
                    tightly-knit community coalesced around FineTurtle, we know
                    we will achieve tremendous success in our endeavor to
                    tokenize real estate globally.
                  </p>
                </Tab.Panel>
              </li>
              <li>
                <Tab.Panel>
                  <p>
                    NFTs and the Blockchain are all products of technological
                    innovation. However, they must be integrated with other
                    technological solutions to maximize their potential.
                  </p>
                </Tab.Panel>
              </li>
              <li className="">
                <Tab.Panel>
                  <p className="mb-6">
                    At FineTurtle, we are aiming for excellence and we are not
                    shy about it. We do, indeed, want to become the benchmark
                    for what an innovative, community-centric NFT project is.
                    And a major part of this is by giving our community real
                    control and a voice in the project.
                  </p>
                  <p className="mb-6">
                    As such, members of our community will enjoy a democratized
                    environment. Here, they will be able to share ideas of how
                    the project can become better. Members will also be able to
                    significantly influence decision making.
                  </p>
                  <p>
                    Every decision made by the founders and leadership will
                    reflect and be in the best interests of community members.
                    This inclusive approach will further forge a stronger NFT
                    community and propel us to greater success.
                  </p>
                </Tab.Panel>
              </li>
            </ul>
          </div>
        </div>
      </Tab.Group>
    </SectionContainer>
  );
};

export default SectionCommunity;
