import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      elevationBack: '#080a0b',
      elevation1: '#0c0e10',
      elevation2: '#111315',
      elevation3: '#16181a',
      elevation4: '#282a2c',
      textP: '#f7f7f8',
      textS: '#abafb4',
      textD: '#abafb4',
      textBtn: '#ffffff',
      primary: '#006258',
      hover: '#8AB7B2',
      successMain: '#27D17F',
      green1: '#182B24',
      green2: '#006258',
      green3: '#0A1F1F',
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
