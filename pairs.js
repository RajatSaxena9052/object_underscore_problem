function pairs(object) {
    if (typeof object == undefined || typeof object != 'object') {
        return []
    } else {
        let array = []
        for (var property in object) {
            array.push([property, object[property]])
        }
        return array
    }
}
module.exports = pairs