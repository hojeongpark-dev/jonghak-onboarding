export default function recordToArray<O>(obj: O) {
  return Object.entries(obj) as Array<[keyof O, O[keyof O]]>;
}
