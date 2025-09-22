import { useCallback, useState } from "react";

import { TToast } from "@/src/types";

interface IToast {
  duration?: number;
  id: string;
  message?: string;
  title: string;
  type: TToast;
}

interface IUseToastReturn {
  clearToasts: () => void;
  error: (title: string, message?: string) => void;
  hideToast: (id: string) => void;
  info: (title: string, message?: string) => void;
  showToast: (toast: Omit<IToast, "id">) => void;
  success: (title: string, message?: string) => void;
  toasts: IToast[];
  warning: (title: string, message?: string) => void;
}

export const useToast = (): IUseToastReturn => {
  const [toasts, setToasts] = useState<IToast[]>([]);

  const showToast = useCallback((toast: Omit<IToast, "id">) => {
    const id = Math.random().toString(36).substring(2, 11);
    const newToast: IToast = {
      ...toast,
      duration: toast.duration || 5000,
      id,
    };

    setToasts((prev) => [...prev, newToast]);

    // Auto remove toast after duration
    if (newToast.duration && newToast.duration > 0) {
      setTimeout(() => {
        hideToast(id);
      }, newToast.duration);
    }
    // eslint-disable-next-line
  }, []);

  const hideToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const clearToasts = useCallback(() => {
    setToasts([]);
  }, []);

  const success = useCallback(
    (title: string, message?: string) => {
      showToast({ message, title, type: "success" });
    },
    [showToast],
  );

  const error = useCallback(
    (title: string, message?: string) => {
      showToast({ message, title, type: "error" });
    },
    [showToast],
  );

  const warning = useCallback(
    (title: string, message?: string) => {
      showToast({ message, title, type: "warning" });
    },
    [showToast],
  );

  const info = useCallback(
    (title: string, message?: string) => {
      showToast({ message, title, type: "info" });
    },
    [showToast],
  );

  return {
    clearToasts,
    error,
    hideToast,
    info,
    showToast,
    success,
    toasts,
    warning,
  };
};
