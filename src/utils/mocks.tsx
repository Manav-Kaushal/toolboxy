import {
  ArrowPathRoundedSquareIcon,
  CalculatorIcon,
  RectangleGroupIcon,
} from "@heroicons/react/24/outline";
import { SidebarOptionMapping } from "./enums";

export const sidebarOptions = [
  {
    title: "calculator",
    identifier: SidebarOptionMapping.Calculator,
    icon: <CalculatorIcon className="w-5 h-5" />,
  },
  {
    title: "px to rem converter",
    identifier: SidebarOptionMapping.PxToRemConverter,
    icon: <ArrowPathRoundedSquareIcon className="w-5 h-5" />,
  },
  {
    title: "random number generator",
    identifier: SidebarOptionMapping.RandomNumberGenerator,
    icon: <RectangleGroupIcon className="w-5 h-5" />,
  },
];

export const CalculatorKeysValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];
