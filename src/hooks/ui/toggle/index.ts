import { useCallback, useState } from "react";

interface IUseToggleReturn {
  setFalse: () => void;
  setTrue: () => void;
  setValue: (value: boolean) => void;
  toggle: () => void;
  value: boolean;
}

export const useToggle = (initialValue = false): IUseToggleReturn => {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setValue((prev) => !prev);
  }, []);

  const setTrue = useCallback(() => {
    setValue(true);
  }, []);

  const setFalse = useCallback(() => {
    setValue(false);
  }, []);

  const setValueCallback = useCallback((newValue: boolean) => {
    setValue(newValue);
  }, []);

  return {
    setFalse,
    setTrue,
    setValue: setValueCallback,
    toggle,
    value,
  };
};
