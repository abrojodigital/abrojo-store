const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "$",
  style: "currency",
});

const formatCurrency = (number) => {
  return CURRENCY_FORMATTER.format(number);
}

export { formatCurrency }