/** Performs ring/mod addition, gives positive results only */
export const ringAddition = (a: number, b: number, lim: number) =>
  (((a + b) % lim) + lim) % lim;
