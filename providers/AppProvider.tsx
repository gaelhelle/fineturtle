import React, { createContext, useState } from "react";
import { themeWeb } from "../variants";

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [theme, setTheme] = useState(themeWeb);
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

      <style global jsx>
        {`
          :root {
            --theme-text: ${theme.text};
            --theme-primary: ${theme.primary};
            --theme-background: ${theme.background};
            --theme-background-darker: ${theme.backgroundDarker};
            --theme-brown-light: ${theme.brownLight};
          }

          body {
            color: var(--theme-text);
            background: var(--theme-background);
            letter-spacing: 1px;
          }

          * {
            cursor: none;
          }

          @media only screen and (min-width: 600px) {
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
          }
        `}
      </style>
    </AppContext.Provider>
  );
};
