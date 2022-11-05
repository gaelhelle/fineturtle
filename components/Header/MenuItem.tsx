import { useContext } from "react";
import { AppContext } from "../../providers/AppProvider";

type Props = {
  children: React.ReactNode;
};

const HeaderMenuItem = (props: Props) => {
  const { children } = props;

  return (
    <div className="text-xs rounded px-6 py-2 transition-all uppercase font-medium bg-gray-50 cursor-not-allowed font-thunder hover:bg-gray-100">
      {children}
    </div>
  );
};

export default HeaderMenuItem;
