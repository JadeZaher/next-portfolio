import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      tablet: "920px",
      mobile: "500px",
    },
    extend: {
      dropShadow: {
        thickDesktop: "-8px 8px 0 #000",
        thickMobile: "-1px 1px 0 #000",
      },
      colors: {
        offBlack: "#1A1818",
        offWhite: "#F9F9F9",
        pink: "#D452C6",
        purple: "#6548E1",
        yellow: "#F9DA49",
        red: "#E14B4B",
        green: "#2CBCA1",
      },
      backgroundPosition: {
        position_paper: "-50% 75%",
      },
      fontSize: {
        rH1: " clamp(32px, calc(2rem + ((1vw - 7.68px) * 5.3819)), 94px);",
        rH2: "clamp(22px, calc(1.375rem + ((1vw - 7.68px) * 2.0833)), 46px);",
        rP: "clamp(16px, calc(1.125rem + ((1vw - 7.68px) * 0.3472)), 26px);",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
} satisfies Config;
