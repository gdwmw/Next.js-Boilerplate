export const add = (a: number, b: number): number => a + b;

export const subtract = (a: number, b: number): number => a - b;

export const multiply = (a: number, b: number): number => a * b;

export const divide = (a: number, b: number): number => {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
};

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
