import React from "react";
import { motion } from "framer-motion";

function Loading() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.05 }}
      exit={{ opacity: 0, x: 15 }}
      className="grid h-full w-full place-items-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className="m-auto animate-ping-slow animate-pulse-slow animate-scale animate-spin-slow bg-transparent opacity-100 drop-shadow-glow"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <g transform="rotate(0 50 50)">
          <rect
            x="47"
            y="25.5"
            rx="0.81"
            ry="0.81"
            width="6"
            height="9"
            fill="#2CBCA1"
          ></rect>
        </g>
        <g transform="rotate(120 50 50)">
          <rect
            x="47"
            y="25.5"
            rx="0.81"
            ry="0.81"
            width="6"
            height="9"
            fill="#2CBCA1"
          ></rect>
        </g>
        <g transform="rotate(240 50 50)">
          <rect
            x="47"
            y="25.5"
            rx="0.81"
            ry="0.81"
            width="6"
            height="9"
            fill="#2CBCA1"
          ></rect>
        </g>
      </svg>
    </motion.div>
  );
}

export default Loading;
