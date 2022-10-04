import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../providers/AppProvier";

type Props = {
  children: any;
};

const HeaderMenuItem = (props: Props) => {
  const { children } = props;
  const { theme } = useContext(AppContext);
  return (
    <div className="text-xs rounded px-6 py-2 transition-all uppercase font-medium bg-gray-50 cursor-not-allowed font-thunder hover:bg-gray-100">
      {children}
    </div>
  );
};

export default HeaderMenuItem;
