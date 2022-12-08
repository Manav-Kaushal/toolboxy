import create from "zustand";

type Props = {};

export const useCalculatorStore = create<any>((set: any, get: any) => ({
  calc: {
    sign: "",
    num: 0,
    res: 0,
  },
  numClickHandler: (e: any) => {
    const value = e.target.innerHTML;
    const calc = get().calc;

    set(() => ({
      ...calc,
      num:
        calc.num === 0 && value === "0"
          ? "0"
          : calc.num % 1 === 0
          ? Number(calc.num + value)
          : calc.num + value,
      res: !calc.sign ? 0 : calc.res,
    }));
  },
  commaClickHandler: (e: any) => {
    const value = e.target.innerHTML;
    const calc = get().calc;
    set({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
    });
  },
  signClickHandler: (e: any) => {
    const value = e.target.innerHTML;
    const calc = get().calc;
    set({
      ...calc,
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0,
    });
  },
  equalsClickHandler: () => {
    const calc = get().calc;
    if (calc.sign && calc.num) {
      const math = (a: number, b: number, sign: string) =>
        sign === "+"
          ? a + b
          : sign === "-"
          ? a - b
          : sign === "X"
          ? a * b
          : a / b;
      set({
        ...calc,
        res:
          calc.num === "0" && calc.sign === "/"
            ? "Can't divide with 0"
            : math(Number(calc.res), Number(calc.num), calc.sign),
        sign: "",
        num: 0,
      });
    }
  },
  invertClickHandler: () => {
    const calc = get().calc;
    set({
      ...calc,
      num: calc.num ? calc.num * -1 : 0,
      res: calc.res ? calc.res * -1 : 0,
      sign: "",
    });
  },
  percentClickHandler: () => {
    const calc = get().calc;
    let num = calc.num ? parseFloat(calc.num) : 0;
    let res = calc.res ? parseFloat(calc.res) : 0;
    set({
      ...calc,
      num: (num /= Math.pow(100, 1)),
      res: (res /= Math.pow(100, 1)),
      sign: "",
    });
  },
  resetClickHandler: () => {
    const calc = get().calc;
    set({
      ...calc,
      sign: "",
      num: 0,
      res: 0,
    });
  },
}));
