const values = require("../values")
const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham', halla: { 1: "one" }, gello: function () { return 2 * 3 } };

const result = values(testObject);
console.log(result)
