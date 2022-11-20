type Props = {
  children: React.ReactNode;
  name: string;
  className?: string;
};

const SectionContainer = ({ children, name, className }: Props) => {
  return (
    <section
      className={`px-10 lg:px-32 py-44 2xl:py-60 ${className}`}
      id={name}
    >
      <div className="mx-auto max-w-[1200px]">{children}</div>
    </section>
  );
};

export default SectionContainer;
