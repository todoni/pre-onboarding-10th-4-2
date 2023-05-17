import { useState } from "react";

const useDebounce = (time: number) => {
  const [debounce, setDebounce] = useState(0);

  return (fnc: (...args: never[]) => unknown) => {
    if (debounce !== 0) clearTimeout(debounce);
    setDebounce(window.setTimeout(fnc, time));
  };
};

export default useDebounce;
