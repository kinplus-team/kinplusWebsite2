import { useState } from "react";

export const useSliderCalculation = (catalogues) => {
  const [index, setIndex] = useState(0);

  const lineheight = 230;
  let equalHeight = (lineheight * index) / catalogues.length;

  return { index, equalHeight, setIndex };
};
