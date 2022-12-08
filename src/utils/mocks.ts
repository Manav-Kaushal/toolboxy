import { CalculatorKeys, SidebarOptionMapping } from "./enums";

export const sidebarOptions = [
  { title: "calculator", identifier: SidebarOptionMapping.Calculator },
  {
    title: "px to rem converter",
    identifier: SidebarOptionMapping.PxToRemConverter,
  },
  {
    title: "random number generator",
    identifier: SidebarOptionMapping.RandomNumberGenerator,
  },
];

// export const CalculatorKeysData = [
//   CalculatorKeys.Seven,
//   CalculatorKeys.Eight,
//   CalculatorKeys.Nine,
//   CalculatorKeys.Divide,
//   CalculatorKeys.Four,
//   CalculatorKeys.Five,
//   CalculatorKeys.Six,
//   CalculatorKeys.Multiply,
//   CalculatorKeys.One,
//   CalculatorKeys.Two,
//   CalculatorKeys.Three,
//   CalculatorKeys.Subtract,
//   CalculatorKeys.Zero,
//   CalculatorKeys.Decimal,
//   CalculatorKeys.Add,
//   CalculatorKeys.Equals,
// ];

export const CalculatorKeysValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];
