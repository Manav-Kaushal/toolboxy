import { CalculatorTypes } from "@utils/types";
import { SetStateAction, useState } from "react";

type Props = {
  calc: CalculatorTypes;
  setCalc: React.Dispatch<React.SetStateAction<CalculatorTypes>>;
};

const useCalculator = ({ calc, setCalc }: Props) => {
  const numClickHandler = (e: any) => {
    const value = e.target.innerHTML;
    setCalc(() => ({
      ...calc,
      num:
        calc.num === 0 && value === "0"
          ? "0"
          : calc.num % 1 === 0
          ? Number(calc.num + value)
          : calc.num + value,
      res: !calc.sign ? 0 : calc.res,
    }));
  };

  const commaClickHandler = (e: any) => {
    const value = e.target.innerHTML;
    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
    });
  };

  const signClickHandler = (e: any) => {
    const value = e.target.innerHTML;
    setCalc({
      ...calc,
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0,
    });
  };

  const equalsClickHandler = () => {
    if (calc.sign && calc.num) {
      const math = (a: number, b: number, sign: string) =>
        sign === "+"
          ? a + b
          : sign === "-"
          ? a - b
          : sign === "X"
          ? a * b
          : a / b;

      setCalc({
        ...calc,
        res:
          calc.num === 0 && calc.sign === "/"
            ? Number("Can't divide with 0")
            : math(Number(calc.res), Number(calc.num), calc.sign),
        sign: "",
        num: 0,
      });
    }
  };

  const invertClickHandler = () => {
    setCalc({
      ...calc,
      num: calc.num ? calc.num * -1 : 0,
      res: calc.res ? calc.res * -1 : 0,
      sign: "",
    });
  };

  const percentClickHandler = () => {
    let num = calc.num ? parseFloat(calc.num.toString()) : 0;
    let res = calc.res ? parseFloat(calc.res.toString()) : 0;
    setCalc({
      ...calc,
      num: (num /= Math.pow(100, 1)),
      res: (res /= Math.pow(100, 1)),
      sign: "",
    });
  };

  const resetClickHandler = () => {
    setCalc({
      ...calc,
      sign: "",
      num: 0,
      res: 0,
    });
  };

  return {
    numClickHandler,
    commaClickHandler,
    signClickHandler,
    equalsClickHandler,
    percentClickHandler,
    invertClickHandler,
    resetClickHandler,
  };
};

export default useCalculator;
