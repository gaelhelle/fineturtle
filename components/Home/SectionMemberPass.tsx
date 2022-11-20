import SectionContainer from "../HOC/SectionInner";

const SectionMemberPass = () => {
  return (
    <SectionContainer name="membership">
      <div className="flex gap-20">
        <div className="w-1/2">
          <div className="bg-slate-200 h-full w-full"></div>
        </div>
        <div className="w-1/2 py-52">
          <div className="rounded-full px-10 py-6 bg-[color:var(--theme-text)] text-[color:var(--theme-primary)] inline-block mb-16 uppercase font-bold text-xs">
            By holding a FineTurtle NFT, you acquire:
          </div>
          <h2 className="font-thunder-bold text-6xl mb-10 uppercase">
            Membership pass
          </h2>
          <p className="mb-6">
            By holding a FineTurtle NFT, you acquire a membership pass to be
            able to benefit from our tokenized real estate platform.
          </p>
          <p>
            If you have 2x FineTurtle NFTs, you will be entitled to earn
            dividends from the revenue generated from tokenized real estate.
          </p>
          <div className="bg-[#F5EEE6] border-2 border-[#F7D9BD] text-[#FF8718] px-7 py-4 rounded-full inline-block font-bold text-xs uppercase mt-12 cursor-pointer hover:bg-[#FF8718] hover:border-[#FF8718] hover:text-white">
            Read more
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default SectionMemberPass;
