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
        glow: ["var(--drop-glow)"],
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
      fontSize: {
        rH1: " clamp(32px, calc(2rem + ((1vw - 7.68px) * 5.3819)), 94px);",
        rH2: "clamp(22px, calc(1.375rem + ((1vw - 7.68px) * 2.0833)), 46px);",
        rP: "clamp(16px, calc(1.125rem + ((1vw - 7.68px) * 0.3472)), 26px);",
      },
      boxShadow: {
        glow: "var(--glow)",
      },
      keyframes: {
        glow: {
          "0 100%": { textShadow: "var(--drop-glow-1)" },
          "50%": { textShadow: "var(--drop-glow-2)" },
        },
        scaleInOut: {
          "0": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(.1)", opacity: "0.2" },
        },
      },
      animation: {
        glow: "glow 1s ease-in-out alternate",
        scale: "scaleInOut 1s ease-in-out alternate",
        "spin-slow": "spin 3s linear infinite",
        "ping-slow": "ping 3s cubic-bezier(0, 0, 0.2, 1) infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
} satisfies Config;
