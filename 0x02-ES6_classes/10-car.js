/* eslint-disable */
const cloneSymbol = Symbol('clone');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  static get [Symbol.species]() {
    return this;
  }

  [cloneSymbol]() {
    return new this.constructor[Symbol.species]();
  }

  cloneCar() {
    return this[cloneSymbol]();
  }
}
