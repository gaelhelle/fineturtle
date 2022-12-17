type Props = {
  value: string;
};

const SectionRotatedText = (props: Props) => {
  const { value } = props;

  return (
    <div className="lg:-rotate-90 relative lg:absolute lg:left-0 2xl:left-12 -top-4 lg:top-64 2xl:top-80 lg:mt-2 lg:w-48">
      <h3 className="font-thunder flex items-center lg:justify-end">
        <div>{value}</div>
        <div className=" ml-2 w-4 h-0.5 bg-black"></div>
      </h3>
    </div>
  );
};

export default SectionRotatedText;
