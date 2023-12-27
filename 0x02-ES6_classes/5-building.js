export default class Building {
  _sqft;

  constructor (sqft) { 
    this._sqft = sqft;

    if (Building.prototype.evacuationWarningMessage ===
    this.evacuationWarningMessage || this.evacuationWarningMessage === undefined
    )
    throw new Error("Class extending Building must override evacuationWarningMessage");
  }

  set sqft (val) {
    if (typeof val !== "number") 
      throw new TypeError("The value of sqrt has to be of type number");
    this._sqft = val;
  }

  get sqft () {
    return this._sqft;
  }

  evacuationWarningMessage () {
    throw new Error("Class extending Building must override evacuationWarningMessage");
  }
}
