export function isUndefined(val: unknown): val is undefined {
  return typeof val === 'undefined';
}
