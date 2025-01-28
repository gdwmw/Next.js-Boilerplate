export const currencyFormat = (amount: number | string, currency: "IDR" | "USD") => {
  const locale = currency === "IDR" ? "id-ID" : "en-US";
  const result = new Intl.NumberFormat(locale, {
    currency: currency,
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
    style: "currency",
  }).format(typeof amount === "string" ? parseInt(amount) : amount);

  return result;
};
