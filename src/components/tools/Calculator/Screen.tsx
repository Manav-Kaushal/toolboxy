import { useCalculatorStore } from "@store/calculator";
import React from "react";
import { Textfit } from "react-textfit";

type Props = {
  value: number;
  sign: string;
};

const Screen = ({ value, sign }: Props) => {
  return (
    <Textfit
      className="flex items-center justify-end h-24 px-2 text-white rounded-md bg-app cursor-text"
      mode="single"
      max={70}
    >
      {sign}
      {value}
    </Textfit>
  );
};

export default Screen;
