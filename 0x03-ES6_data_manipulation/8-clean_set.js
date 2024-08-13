export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }

  return Array.from(set)
    .filter((item) => item.startsWith(startString) && item !== startString) // Additional safeguard
    .map((item) => item.slice(startString.length))
    .join('-');
}
