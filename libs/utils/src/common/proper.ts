const proper = (text: string) => {
  if (!text || text.length === 0) return "";
  return text.charAt(0).toUpperCase() + text.substring(1).toLowerCase();
};

export { proper };
