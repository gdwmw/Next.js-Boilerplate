import { useCallback, useState } from "react";

interface IUseModalReturn {
  close: () => void;
  isOpen: boolean;
  open: () => void;
  toggle: () => void;
}

export const useModal = (initialState = false): IUseModalReturn => {
  const [isOpen, setIsOpen] = useState(initialState);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return {
    close,
    isOpen,
    open,
    toggle,
  };
};
