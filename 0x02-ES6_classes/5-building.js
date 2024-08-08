/* eslint-disable */
export default class Building {
  constructor(sqft) {
    // Check that sqft is a number
    if (typeof sqft !== 'number') throw new TypeError('sqft must be a number');

    this._sqft = sqft;

    // Check if the evacuationWarningMessage method is implemented
    if (
      this.constructor !== Building &&
      this.evacuationWarningMessage === undefined
    ) {
      throw new Error(
        'Class extending Building must override evacuationWarningMessage'
      );
    }
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }
}
