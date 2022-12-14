const toLocaleString = (num: number) =>
  String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

const removeSpaces = (num: number) => num.toString().replace(/\s/g, "");

const formatNumber = (number: number, type?: string) => {
  const formatLocale = Intl.NumberFormat("en-US");
  return formatLocale.format(number);
};

export { toLocaleString, removeSpaces, formatNumber };
