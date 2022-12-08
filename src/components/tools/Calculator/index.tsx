import { useCalculatorStore } from "@store/calculator";
import { CalculatorKeys } from "@utils/enums";
import { CalculatorKeysValues } from "@utils/mocks";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import ButtonBox from "./ButtonBox";
import Screen from "./Screen";
import Wrapper from "./Wrapper";

type Props = {};

const Calculator = (props: Props) => {
  const {
    calc,
    numClickHandler,
    commaClickHandler,
    signClickHandler,
    equalsClickHandler,
    percentClickHandler,
    invertClickHandler,
    resetClickHandler,
  } = useCalculatorStore();

  // const handleButtonPress = (btn: string, e: any) => {
  //   if (btn === "C") return resetClickHandler();
  //   if (btn === "+-") return invertClickHandler();
  //   if (btn === "%") return percentClickHandler();
  //   if (btn === "=") return equalsClickHandler();
  //   if (btn === "/" || btn === "X" || btn === "-" || btn === "+")
  //     return signClickHandler(e);
  //   if (btn === ".") return commaClickHandler(e);
  //   return numClickHandler(e);
  // };

  return (
    <Wrapper>
      <Screen value={calc.num ? calc.num : calc.res} />
      <ButtonBox>
        {/* {CalculatorKeysData.map((button, index) => (
          <li
            key={index}
            onClick={() => handleButtonPress(button)}
            className="flex items-center justify-center w-full h-16 text-black bg-gray-200 rounded-md cursor-pointer active:bg-gray-300"
          >
            <code className="text-2xl font-semibold">{button}</code>
          </li>
        ))} */}
        {CalculatorKeysValues.flat().map((btn: any, i: number) => {
          return (
            <Button
              key={i}
              className={
                btn === "=" ? "calculator__btn__equals" : "calculator__btn"
              }
              value={btn}
              onClick={
                btn === "C"
                  ? resetClickHandler
                  : btn === "+-"
                  ? invertClickHandler
                  : btn === "%"
                  ? percentClickHandler
                  : btn === "="
                  ? equalsClickHandler
                  : btn === "/" || btn === "X" || btn === "-" || btn === "+"
                  ? signClickHandler
                  : btn === "."
                  ? commaClickHandler
                  : numClickHandler
              }
            />
          );
        })}
      </ButtonBox>
    </Wrapper>
  );
};

export default Calculator;
