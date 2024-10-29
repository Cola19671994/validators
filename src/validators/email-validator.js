export const emailValidator = (value) =>
  /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,63}$/.test(value) ? null : "E-mail error";
