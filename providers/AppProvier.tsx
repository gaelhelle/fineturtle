import React, { createContext, useEffect, useState } from "react";
import { Modal } from "../components/Modal";
import { theme1_palette_1 } from "../variants";

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [theme, setTheme] = useState(theme1_palette_1);
  const [palette, setPalette] = useState(0);

  const values = {
    showSettingsModal,
    setShowSettingsModal,
    theme,
    setTheme,
    palette,
    setPalette,
  };

  return (
    <AppContext.Provider value={values}>
      {children}
      {showSettingsModal && <Modal />}
      <style global jsx>{`
        body {
          background: ${theme.background};
        }
      `}</style>
    </AppContext.Provider>
  );
};
