import React, { createContext, useEffect, useState } from "react";
import { Modal } from "../components/Modal";
import { theme1_palette_1 } from "../variants";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

      {/* <div
        onClick={() => setShowSettingsModal((state) => !state)}
        className="absolute top-0 right-0 p-4"
      >
        <FontAwesomeIcon icon={faGear} width="14" />
      </div> */}

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
