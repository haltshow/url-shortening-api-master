import type { Config } from "tailwindcss";
const colors = require('tailwindcss/colors')

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
    },
    colors: {
      cyan: 'hsl(180, 66%, 49%)',
      dark_violet: 'hsl(257, 27%, 26%)',
      red: 'hsl(0, 87%, 67%)',
      gray: 'hsl(0, 0%, 75%)',
      grayish_violet: 'hsl(257, 7%, 63%)',
      very_dark_blue: 'hsl(255, 11%, 22%)',
      very_dark_violet: 'hsl(260, 8%, 14%)',
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      blue: colors.blue,
      bg_color: '#EFF1F7'
    },
    backgroundImage: {
      'boost-desktop': "url('/bg-boost-desktop.svg')",
    }
  },
  plugins: [],
};
export default config;
