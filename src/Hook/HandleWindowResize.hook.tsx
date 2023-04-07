import { useState, useEffect } from "react";

type WindowSize = {
  height: number | undefined;
  width: number | undefined;
};

function WindowSize() {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    height: 1,
    width: 1,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return windowSize;
}

export default WindowSize;
