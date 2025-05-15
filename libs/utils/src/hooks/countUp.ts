import { useEffect, useState } from "react";

const useCountUp = (
  end: number,
  {
    duration = 2500,
    frame = 60
  }: {
    duration?: number;
    frame?: number;
  }
) => {
  const [count, setCount] = useState(0);
  const frameRate = 1000 / frame;
  const totalFrame = Math.round(duration / frameRate);

  useEffect(() => {
    if (end === 0) {
      return;
    }
    let currentNumber = 0;
    const counter = setInterval(() => {
      const progress =
        ++currentNumber / totalFrame === 1
          ? 1
          : 1 - Math.pow(2, -10 * (++currentNumber / totalFrame));
      setCount(Math.round(end * progress));

      if (progress === 1) {
        clearInterval(counter);
      }
    }, frameRate);
  }, [end, frameRate, totalFrame]);

  return count;
};

export { useCountUp };
