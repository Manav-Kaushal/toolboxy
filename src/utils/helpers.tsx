const toLocaleString = (num: number) =>
  String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

const removeSpaces = (num: number) => num.toString().replace(/\s/g, "");

export { toLocaleString, removeSpaces };
