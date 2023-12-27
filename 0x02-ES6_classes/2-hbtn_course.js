export default class HolbertonCourse {

  _name;
  _length;
  _students;
  constructor (name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students
  }


  set name(val) {
    if (typeof val !== "string")
      throw new TypeError("The name should of string type");
    this._name = val;
  }

  get name () {
    return this._name;
  }

  set length (val) {
    if (typeof val !== "number")
      throw new TypeError("The length should be of type number");
    this._length = val;
  }

  get length () {
    return this._length;
  }

  set students (val) {
    if (!val instanceof Array)
      throw new TypeError("The students should be of type Array");
    this._students = val;
  }

  get students () {
    return this._students
  }
}
