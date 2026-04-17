import { KeyboardEvent } from "react";

const ALLOWED_KEYS = ["ArrowLeft", "ArrowRight", "Backspace", "Delete", "Tab"];

const createValidation =
  (regex: RegExp, additionalKeys: string[] = []) =>
  (e: KeyboardEvent) => {
    const allowedKeys = [...ALLOWED_KEYS, ...additionalKeys];
    if (!regex.test(e.key) && !allowedKeys.includes(e.key)) {
      e.preventDefault();
    }
  };

export const inputValidations = {
  email: createValidation(/^[a-zA-Z0-9@._-]$/),
  name: createValidation(/^[a-zA-Z\s]$/),
  numeric: createValidation(/^\d$/),
  phoneNumber: createValidation(/\d/, ["a"]),
  username: createValidation(/^[a-z0-9]$/),
};
