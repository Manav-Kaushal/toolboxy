import React from "react";

type Props = {
  children: React.ReactNode;
};

const Wrapper = ({ children }: Props) => {
  return <div className="max-w-xs space-y-4">{children}</div>;
};

export default Wrapper;
