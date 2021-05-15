function keys(object) {
    if (typeof object == undefined || typeof object != 'object') {
        return []
    } else {
        let keys = []
        for (var property in object) {
            keys.push(property)
        }
        return keys
    }
}

module.exports = keys;