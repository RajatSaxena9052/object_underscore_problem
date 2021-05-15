function invert(object) {
    if (typeof object == undefined || Array.isArray(object) == true || typeof object != 'object') {
        return {}
    } else {
        let newObject = {}

        for (let property in object) {
            let key = object[property] //here the property cannot be set to an object without converting to string
            newObject[`${key}`] = property
        }
        return newObject
    }
}
module.exports = invert