import React from "react";

type Props = { children: React.ReactNode };

const ButtonBox = ({ children }: Props) => {
  return (
    <div className="grid grid-cols-4 grid-rows-5 gap-2 select-none">
      {children}
    </div>
  );
};

export default ButtonBox;
