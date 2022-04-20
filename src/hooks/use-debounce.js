import { useRef } from "react";

export const useDebounce = (func, wait_time) => {
  const timeRef = useRef(null);
  function debounced() {
    // code here
    if (timeRef.current) {
      clearTimeout(timeRef.current);
    }
    timeRef.current = setTimeout(func, wait_time);
  }
  function cancel() {
    clearTimeout(timeRef.current);
  }
  debounced.cancel = cancel;
  return debounced;
};
