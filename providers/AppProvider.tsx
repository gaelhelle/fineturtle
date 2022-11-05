import React, { createContext, useState } from "react";
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
      <style global jsx>{`
        body {
          color: ${theme.text};
          background: ${theme.background};
          letter-spacing: 1px;
        }
      `}</style>

      <style global jsx>{`
        ${theme.name === "theme1_palette_1" || theme.name === "theme1_palette_2"
          ? `
          * {
            cursor: none;
          }
          
          body:before {
            content: "";
            position: absolute;
            z-index: 999;
            top: var(--y);
            left: var(--x);
            right: 0;
            bottom: 0;
            width: 1em;
            height: 1em;
            border-radius: 50%;
            transform: translate(-50%, -50%);
            background: #fff;
            mix-blend-mode: difference;
            pointer-events: none;
          }
          `
          : ""}
      `}</style>
    </AppContext.Provider>
  );
};
