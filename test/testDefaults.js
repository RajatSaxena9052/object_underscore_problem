const defaults = require("../defaults");
const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham', halla: { 1: "one" }, gello: function () { return 2 * 3 } };
const defaultProps = { 1: "one", name: "saxena", 100: "one", 3: "three" }

const result = defaults(testObject, defaultProps);
console.log(result)
