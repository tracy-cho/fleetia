import { RefObject, useEffect, useMemo, useRef } from "react";
import { useDebounce } from "./debouncing";

const useResize = <F extends (currentRef: HTMLDivElement | null) => any>(
  resizeEvent: F
): {
  ref: RefObject<HTMLDivElement>;
} => {
  const ref = useRef<HTMLDivElement>(null);

  const handleResize = useDebounce(() => {
    if (!ref.current) return;
    resizeEvent(ref.current);
  }, 100);

  useMemo(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  useEffect(() => {
    handleResize();
  });

  return { ref };
};

export { useResize };
