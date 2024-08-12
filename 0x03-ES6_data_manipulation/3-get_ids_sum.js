export default function getStudentIdsSum(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  return arr.reduce((acc, item) => acc + item.id, 0);
}
