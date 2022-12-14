import Layout from "@components/Layout";
import useCalculator from "@utils/hooks/useCalculator";
import { CalculatorKeysValues } from "@utils/mocks";
import { CalculatorTypes } from "@utils/types";
import React, { ReactElement, useState } from "react";
import Button from "../src/components/tools/Calculator/Button";
import ButtonBox from "../src/components/tools/Calculator/ButtonBox";
import Screen from "../src/components/tools/Calculator/Screen";
import Wrapper from "../src/components/tools/Calculator/Wrapper";

type Props = {};

const Calculator = (props: Props) => {
  const [calc, setCalc] = useState<CalculatorTypes>({
    sign: "",
    num: 0,
    res: 0,
  });
  const [sign, setSign] = useState("");

  const {
    numClickHandler,
    commaClickHandler,
    signClickHandler,
    equalsClickHandler,
    percentClickHandler,
    invertClickHandler,
    resetClickHandler,
  } = useCalculator({ calc, setCalc });

  return (
    <Wrapper>
      <Screen value={calc.num ? +calc.num : +calc.res} sign={sign} />
      <ButtonBox>
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

Calculator.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Calculator;
