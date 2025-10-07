import { useCallback, useEffect, useState } from "react";

interface IUseLocalStorageOptions<T> {
  defaultValue?: T;
  deserialize?: (value: string) => T;
  serialize?: (value: T) => string;
}

interface IUseLocalStorageReturn<T> {
  isLoaded: boolean;
  removeValue: () => void;
  setValue: (value: ((prev: T) => T) | T) => void;
  value: T;
}

export const useLocalStorage = <T>(key: string, options: IUseLocalStorageOptions<T> = {}): IUseLocalStorageReturn<T> => {
  const { defaultValue, deserialize = JSON.parse, serialize = JSON.stringify } = options;

  const [value, setValue] = useState<T>(() => {
    if (typeof window === "undefined") {
      return defaultValue as T;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? deserialize(item) : (defaultValue as T);
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return defaultValue as T;
    }
  });

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const setValueCallback = useCallback(
    (newValue: ((prev: T) => T) | T) => {
      try {
        const valueToStore = newValue instanceof Function ? newValue(value) : newValue;
        setValue(valueToStore);

        if (typeof window !== "undefined") {
          window.localStorage.setItem(key, serialize(valueToStore));
        }
      } catch (error) {
        console.warn(`Error setting localStorage key "${key}":`, error);
      }
    },
    [key, serialize, value],
  );

  const removeValue = useCallback(() => {
    try {
      setValue(defaultValue as T);
      if (typeof window !== "undefined") {
        window.localStorage.removeItem(key);
      }
    } catch (error) {
      console.warn(`Error removing localStorage key "${key}":`, error);
    }
  }, [key, defaultValue]);

  return {
    isLoaded,
    removeValue,
    setValue: setValueCallback,
    value,
  };
};
