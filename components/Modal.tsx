import { faGear, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { AppContext } from "../providers/AppProvier";
import {
  theme1_palette_1,
  theme1_palette_2,
  theme2_palette_1,
  theme2_palette_2,
} from "../variants";

type ModalType = {
  open?: boolean;
};

export const Modal = (props: ModalType) => {
  const { open } = props;

  const { setShowSettingsModal, theme, setTheme, palette, setPalette } =
    useContext(AppContext);

  return (
    <div className="fixed z-20 w-screen h-screen left-0 right-0 top-0 bg-black/90 transition-all text-white p-20">
      <div className="relative h-full">
        <div
          className="absolute top-0 right-0 p-4"
          onClick={() => setShowSettingsModal((state) => !state)}
        >
          <FontAwesomeIcon icon={faXmark} width="20" />
        </div>
        <div className="flex flex-col items-center justify-center h-full">
          <div className="flex-col">
            <div className="flex items-center mb-10">
              <ThemeSwitch
                text="Theme 1"
                active={
                  theme === theme1_palette_1 || theme === theme1_palette_2
                }
                onClick={() => setTheme(theme1_palette_1)}
              />
              <PaletteSwitch
                active={theme === theme1_palette_1}
                palette={theme1_palette_1}
                onClick={() => setTheme(theme1_palette_1)}
              />
              <PaletteSwitch
                active={theme === theme1_palette_2}
                palette={theme1_palette_2}
                onClick={() => setTheme(theme1_palette_2)}
              />
            </div>
            <div className="flex items-center mb-10">
              <ThemeSwitch
                text="Theme 2"
                active={
                  theme === theme2_palette_1 || theme === theme2_palette_2
                }
                onClick={() => setTheme(theme2_palette_1)}
              />
              {/* {theme === index + 1 &&
                  itemTheme.map((itemPalette, index) => (
                    <PaletteSwitch
                      theme={theme}
                      palette={palette}
                      setPalette={setPalette}
                      number={index + 1}
                    />
                  ))} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ThemeSwitch = (props) => {
  const { text, active } = props;

  return (
    <div
      {...props}
      className={`border-2 rounded px-3 py-2 mx-6 ${
        active && "bg-emerald-400 border-emerald-300"
      }`}
    >
      {text}
    </div>
  );
};

const PaletteSwitch = (props) => {
  const { active, palette } = props;

  return (
    <div
      className={`text-sm border-2 rounded-full px-3 py-2 mx-6 bg-emerald-400 ${
        active ? "border-transparent" : "border-white  bg-transparent"
      }`}
      {...props}
    >
      <div className="flex items-center -space-x-2">
        <div
          className="h-8 w-8 border-2 rounded-full "
          style={{ backgroundColor: palette.background }}
        />
        <div
          className="h-8 w-8 border-2 rounded-full "
          style={{ backgroundColor: palette.primary }}
        />
        <div
          className="h-8 w-8 border-2 rounded-full "
          style={{ backgroundColor: palette.secondary }}
        />
      </div>
    </div>
  );
};
