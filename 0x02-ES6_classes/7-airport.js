/* eslint-disable */
export default class Airport {
  constructor(name, code) {
    // Assign the attributes to the instance
    this._name = name;
    this._code = code;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Getter for code
  get code() {
    return this._code;
  }

  // Override the default string representation
  toString() {
    return `[object ${this.code}]`;
  }
}
