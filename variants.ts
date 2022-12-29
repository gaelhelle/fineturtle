import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons";

type Theme = {
  text?: string;
  background?: string;
  backgroundDarker?: string;
  primary?: string;
  secondary?: string;
  brownLight?: string;
};

export const themeWeb: Theme = {
  background: "#F4F4F4",
  backgroundDarker: "#E4E4E4",
  text: "#2E3333",
  primary: "#C8FF88",
  brownLight: "#EBE6E3",
};

// export const menu = ["Lounge", "Manifesto", "FineMap", "FAQ"];
export const socials = [
  {
    name: "twitter",
    url: "https://twitter.com/FineTurtleNFT",
    icon: faTwitter,
  },
  {
    name: "discord",
    url: "https://discord.gg/fineturtle",
    icon: faDiscord,
  },
];
