import { useCallback, useEffect, useState } from "react";

interface IWindowSize {
  height: number;
  width: number;
}

interface IUseWindowSizeOptions {
  initialHeight?: number;
  initialWidth?: number;
}

export const useWindowSize = (options: IUseWindowSizeOptions = {}): IWindowSize => {
  const { initialHeight = 0, initialWidth = 0 } = options;

  const [windowSize, setWindowSize] = useState<IWindowSize>({
    height: typeof window !== "undefined" ? window.innerHeight : initialHeight,
    width: typeof window !== "undefined" ? window.innerWidth : initialWidth,
  });

  const handleResize = useCallback(() => {
    setWindowSize({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.addEventListener("resize", handleResize);

    // Set initial size
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return windowSize;
};
