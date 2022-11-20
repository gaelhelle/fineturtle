import Image from "next/image";
import FooterNote from "./FooterNote";

const Footer = () => {
  return (
    <div className="px-8 lg:px-32 py-8 lg:py-32 border-top border">
      <div className="flex items-center justify-between">
        <div>
          <Image src="/img/full-logo.svg" width="117" height="21" />
        </div>
        <div>
          <FooterNote />
        </div>
      </div>
    </div>
  );
};

export default Footer;
