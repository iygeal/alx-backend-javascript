export default function (arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  return new Set(arr);
}
