import Image from "next/image";
import HeaderMenuItem from "./HeaderMenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faDiscord } from "@fortawesome/free-brands-svg-icons";

const HeaderNav = () => {
  return (
    <div className="fixed px-32 mt-8 flex items-center justify-between w-full">
      <div>
        <Image src="/img/logo.png" width="121" height="34" />
      </div>
      <div className="flex items-center space-x-4">
        <HeaderMenuItem>Gallery</HeaderMenuItem>
        <HeaderMenuItem>World</HeaderMenuItem>

        <HeaderMenuItem>
          <FontAwesomeIcon icon={faTwitter} width="14" />
        </HeaderMenuItem>
        <HeaderMenuItem>
          <FontAwesomeIcon icon={faDiscord} width="14" />
        </HeaderMenuItem>
      </div>
    </div>
  );
};

export default HeaderNav;
