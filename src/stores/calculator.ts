import { CalculatorTypes } from "@utils/types";
import create from "zustand";

type Props = {};

export const useCalculatorStore = create<any>((set: any, get: any) => ({
  calc: {
    sign: "",
    num: 0,
    res: 0,
  },
  setCalc: (newState: CalculatorTypes) =>
    set((state: CalculatorTypes) => ({ ...state, newState })),
}));
