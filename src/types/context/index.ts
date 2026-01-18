export interface IGlobalStates {
  openA?: boolean;
  openB?: boolean;
}

export interface IGlobalActions {
  setOpenA: (param: boolean) => void;
  setOpenB: (param: boolean) => void;
}
