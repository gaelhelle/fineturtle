import FooterNote from "../../components/FooterNote";

const HomePage = () => {
  return (
    <>
      <div className="h-screen flex items-center justify-center overflow-hidden px-4 md:px-10 relative">
        <img
          src="/img/home/home-illustration.webp"
          alt="FineTurtle Homepage illustration"
        />
      </div>
      <div className="fixed right-0 bottom-0 px-8 lg:px-32 mb-6 md:mb-12">
        <FooterNote />
      </div>
    </>
  );
};

export default HomePage;
