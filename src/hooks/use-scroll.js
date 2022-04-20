import { useEffect, useState } from "react";

export const useScroll = () => {
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = (e) => {
    setScrollTop(e.target.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);
  return {
    scrollTop,
  };
};
