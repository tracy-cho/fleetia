const percentage = (val: number, fix = 2): number =>
  parseFloat((val * 100).toFixed(fix));

export { percentage };
