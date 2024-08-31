// useDebounce.jsx
import React from "react";

const useDebounce = (func = () => {}, dependencies = [], delay = 500) => {
  const callback = React.useCallback(func, dependencies);
  const timeoutRef = React.useRef(null);

  const debounce = React.useCallback(
    (...args) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return debounce;
};

export default useDebounce;
