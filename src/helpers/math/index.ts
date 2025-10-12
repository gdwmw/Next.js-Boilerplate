import { add, divide, multiply, subtract } from "@/src/utils";

export const calculateAverage = (numbers: number[]): number => {
  const total = numbers.reduce((sum, num) => add(sum, num), 0);
  return divide(total, numbers.length);
};

export const calculateIncreasePercentage = (oldValue: number, newValue: number): number => {
  const difference = subtract(newValue, oldValue);
  const percent = divide(difference, oldValue) * 100;
  return percent;
};

export const calculatePriceWithTax = (price: number, taxPercent: number): number => {
  const taxAmount = multiply(price, taxPercent / 100);
  return add(price, taxAmount);
};
