const pairs = require("../pairs");
const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham', halla: { 1: "one" }, gello: function () { return 2 * 3 } };

const result = pairs(testObject);
console.log(result)
