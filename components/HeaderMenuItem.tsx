const HeaderMenuItem = ({ children }) => {
  return (
    <div className="text-2xs bg-[#317774]/5 rounded px-6 py-2 hover:bg-[#C98474] hover:text-white transition text-[#C98474] uppercase font-medium">
      {children}
    </div>
  );
};

export default HeaderMenuItem;
