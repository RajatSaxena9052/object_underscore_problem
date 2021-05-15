function keys(object) {
    if (typeof object == undefined || typeof object != 'object') {
        return []
    } else {
        return Object.keys(object)
    }
}

module.exports = keys;