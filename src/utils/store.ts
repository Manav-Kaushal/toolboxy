import create from "zustand";

type Props = {
  view: string;
  setView: any;
};

export const useStore = create<Props>((set) => ({
  view: "calculator",
  setView: (view: string) => set((state) => ({ ...state, view })),
}));
