import { create } from "zustand";

interface IStates {
  openA?: boolean;
  openB?: boolean;
}

interface IActions {
  setOpenA: (param: boolean) => void;
  setOpenB: (param: boolean) => void;
}

export const useGlobalStates = create<IActions & IStates>((set) => ({
  openA: false,
  openB: false,
  setOpenA: (openA: boolean) => set({ openA }),
  setOpenB: (openB: boolean) => set({ openB }),
}));
