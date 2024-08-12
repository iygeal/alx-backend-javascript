export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  const buffer = new ArrayBuffer(length);
  const int8Viewer = new DataView(buffer);

  int8Viewer.setInt8(position, value);

  return int8Viewer;
}
