/* eslint-disable */
// Import the Building class
import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    // Call the parent class constructor with sqft
    super(sqft);

    // Assign floors to the instance
    this._floors = floors;
  }

  // Getter for sqft (inherited from Building)
  get sqft() {
    return super.sqft;
  }

  // Getter for floors
  get floors() {
    return this._floors;
  }

  // Override the evacuationWarningMessage method
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors.`;
  }
}
