const validatePhoneNumber = (phoneNumber: string): string => {
  const number = phoneNumber.replaceAll("-", "");
  const len = number.length;
  const endDash = len >= 11 ? 7 : 6;

  return (
    number.substring(0, 3) +
    (len > 3 ? "-" : "") +
    number.substring(3, endDash) +
    (len > 7 ? "-" : "") +
    number.substring(endDash)
  ).substring(0, 13);
};

export { validatePhoneNumber };
