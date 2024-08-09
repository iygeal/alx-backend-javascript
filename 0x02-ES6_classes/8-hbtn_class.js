/* eslint-disable */

export default class HolbertonClass {
  constructor(size, location) {
    // Assign the attributes to the instance
    this._size = size;
    this._location = location;
  }

  // Override the default number conversion
  valueOf() {
    return this._size;
  }

  // Override the default string conversion
  toString() {
    return this._location;
  }
}
