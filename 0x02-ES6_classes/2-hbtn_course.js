/* disable eslint */
export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') throw new TypeError('Name must be a string');
    if (typeof length !== 'number')
      throw new TypeError('Length must be a number');
    if (
      !Array.isArray(students) ||
      !students.every((student) => typeof student === 'string')
    ) {
      throw new TypeError('Students must be an array of strings');
    }
    // Assign the attributes
    this._name = name;
    this._length = length;
    this._students = students;
  }
  // Getter and Setter for the name attribute
  get name() {
    return this._name;
  }
  set name(value) {
    if (typeof value !== 'string') throw new TypeError('Name must be a string');
    this._name = value;
  }
  // Getter and Setter for the length attribute
  get length() {
    return this._length;
  }
  set length(value) {
    if (typeof value !== 'number')
      throw new TypeError('Length must be a number');
    this._length = value;
  }
  // Getter and Setter for the students attribute
  get students() {
    return this._students;
  }
  set students(value) {
    if (
      !Array.isArray(value) ||
      !value.every((student) => typeof student === 'string')
    ) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
