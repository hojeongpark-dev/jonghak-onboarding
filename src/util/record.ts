// object to array 가 더 낫지 않았을지?
export default function recordToArray<O>(obj: O) {
  return Object.entries(obj) as Array<[keyof O, O[keyof O]]>;
}
