import React from "react";

const useDebounce = (effect, dependencies, delay) => {
  const callback = React.useCallback(effect, dependencies);

  React.useEffect(() => {
    const timeout = setTimeout(callback, delay);

    return () => clearTimeout(timeout);
  }, [callback, delay]);
};

export default useDebounce;
