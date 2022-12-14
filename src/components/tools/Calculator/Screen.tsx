import React from "react";
import { Textfit } from "react-textfit";

type Props = {
  value: number;
};

const Screen = ({ value }: Props) => {
  return (
    <Textfit
      className="flex items-center justify-end h-24 px-2 text-white rounded-md bg-app cursor-text"
      mode="single"
      max={70}
    >
      {value}
    </Textfit>
  );
};

export default Screen;
