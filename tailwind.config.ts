import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary1: "#FAC63D",
        primary2: "#F8F8F7",
        primart3: "#D55D0D",
        secondary1: "#2E3731",
        secondary2: "#F89609",
        secondary3: "#427487",
        Grandis : "#FAC63D",
        Tenne : "#D55D0D",
        Tenne60 : "#F49352",
      },
    },
  },
  plugins: [],
};
export default config;
