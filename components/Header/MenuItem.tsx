import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  page?: string;
  externalUrl?: boolean;
  children: React.ReactNode;
};

const HeaderMenuItem = (props: Props) => {
  const { children, page, externalUrl } = props;
  const router = useRouter();

  const buttonClasses = `text-sm rounded px-6 h-8 flex items-center transition-all uppercase font-medium bg-black  font-thunder hover:bg-opacity-10 ${
    router.pathname === page ? "bg-opacity-10" : "bg-opacity-3"
  }`;

  return (
    <>
      {externalUrl ? (
        <a className={buttonClasses} href={page}>
          {children}
        </a>
      ) : (
        <Link href={page}>
          <a className={`${buttonClasses} pt-0.5`}>{children}</a>
        </Link>
      )}
    </>
  );
};

export default HeaderMenuItem;
