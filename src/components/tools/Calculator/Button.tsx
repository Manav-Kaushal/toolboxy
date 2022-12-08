import classNames from "classnames";
import React from "react";

type Props = { className: string; value: string; onClick: (e: any) => void };

const Button = ({ className, value, onClick }: Props) => {
  return (
    <button className={classNames(className)} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
