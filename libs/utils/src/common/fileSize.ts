const fileSize = (size: number, fix = 2) => {
  const kb = size / 1024;
  if (kb < 1024) {
    return `${kb.toFixed(fix)}KB`;
  } else {
    return `${(kb / 1024).toFixed(fix)}MB`;
  }
};

export { fileSize };
