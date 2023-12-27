export default class Currency {
  _name;
  _code;

  constructor (code, name) {
    this.name = name;
    this.code = code;
  }

  set name (val) {
    if (typeof val !== "string")
      throw new TypeError("The name should of string type");
    this._name = val;
  }

  get name() {
    return this._name;
  } 

  set code (val) {
    if (typeof val !== "string")
      throw new TypeError("The name should of string type");
    this._code = val;
  }

  get code () {
    return this._code;
  }

  displayFullCurrency () {
    return `${this._name} (${this._code})`;
  }
}
