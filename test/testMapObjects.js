const values = require("../mapObjects")
const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham', halla: { 1: "one" }, gello: function () { return 2 * 3 } };

let callBack = (value, key) => value + 5

const result = values(testObject, callBack);
console.log(result)
