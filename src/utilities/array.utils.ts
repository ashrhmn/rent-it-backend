export const commonArrayItems = <T>(arrays: T[][]) =>
  (arrays.shift() || []).filter((v) =>
    arrays.every((a) => a.indexOf(v) !== -1),
  );
