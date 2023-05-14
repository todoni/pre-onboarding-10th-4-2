// import { useState } from "react";
// import { DELAY_TIME } from "../constants";

// export const useDebounce = () => {
//   const [debounce, setDebounce] = useState(0);

//   return (fnc: Function) => {
//     if (debounce !== 0) clearTimeout(debounce);
//     setDebounce(setTimeout(fnc, DELAY_TIME));
//   };
// };