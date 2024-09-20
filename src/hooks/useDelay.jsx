import { useCallback } from "react";

const useDelay = () => {
  const delay = useCallback((time) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, time);
    });
  }, []);

  return delay;
};

export default useDelay;
