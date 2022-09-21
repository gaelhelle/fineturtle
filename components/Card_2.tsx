import * as Color from "color";
import { useContext } from "react";
import { AppContext } from "../providers/AppProvier";

const Card_2 = () => {
  const { theme } = useContext(AppContext);

  return (
    <div
      className="text-left"
      style={{
        backgroundColor: Color(theme.background).darken(0.05),
      }}
    >
      <div
        style={{
          backgroundImage: `url("/img/background-image.png")`,
        }}
        className="h-52 bg-cover"
      />
      <div className="p-6">
        <p style={{ color: theme.primary }} className="opacity-50 mb-2">
          Lorem
        </p>
        <h2 className="text-4xl" style={{ color: theme.primary }}>
          Lorem ipsum
        </h2>
        <p
          style={{ color: theme.primary }}
          className="text-lg mt-6 mx-auto max-w-xl opacity-50"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel
          felis dictum diam vestibulum vehicula eu.
        </p>
      </div>
    </div>
  );
};

export default Card_2;
