import { CalculatorKeys } from "@utils/enums";
import { CalculatorKeysData } from "@utils/mocks";
import React, { useEffect, useState } from "react";

type Props = {};

const Calculator = (props: Props) => {
  const [number, setNumber] = useState<string>("");

  const functions = [
    CalculatorKeys.Divide,
    CalculatorKeys.Multiply,
    CalculatorKeys.Subtract,
    CalculatorKeys.Add,
    CalculatorKeys.Equals,
  ];

  function handleButtonPress(button: string) {
    if (functions.includes(button as CalculatorKeys)) {
      return;
    }

    return setNumber((state) => state + button);
  }

  return (
    <div className="max-w-xs space-y-4">
      <input
        type="text"
        value={number}
        className="w-full px-3 py-6 rounded-md bg-app cursor-text calculator__screen"
      />
      <ul className="grid grid-cols-4 grid-rows-4 gap-2 select-none calculator__buttons">
        {CalculatorKeysData.map((button, index) => (
          <li
            key={index}
            onClick={() => handleButtonPress(button)}
            className="flex items-center justify-center w-full h-16 text-black bg-gray-200 rounded-md cursor-pointer active:bg-gray-300"
          >
            <code className="text-2xl font-semibold">{button}</code>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Calculator;
