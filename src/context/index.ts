import { create } from "zustand";

import { IGlobalActions, IGlobalStates } from "@/src/types";

export const useGlobalContext = create<IGlobalActions & IGlobalStates>((set) => ({
  openA: false,
  openB: false,
  setOpenA: (openA: boolean) => set({ openA }),
  setOpenB: (openB: boolean) => set({ openB }),
}));
